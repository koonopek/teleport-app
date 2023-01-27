"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seller = void 0;
const ethers_1 = require("ethers");
const Constants_1 = require("./Constants");
const ERC20_1 = __importDefault(require("./ERC20"));
const SafeContract_1 = require("./SafeContract");
const TeleportEscrow_1 = __importDefault(require("./TeleportEscrow"));
const INIT_STATE = JSON.stringify({});
function solidityKeccak(value) {
    return ethers_1.ethers.utils.keccak256(ethers_1.ethers.utils.defaultAbiCoder.encode(["string"], [value]));
}
class Seller {
    constructor(signer, warp, evm, evmSigner) {
        this.signer = signer;
        this.warp = warp;
        this.evm = evm;
        this.evmSigner = evmSigner;
    }
    createOffer(nftContractId, nftId, price, priceTokenId, receiver) {
        return __awaiter(this, void 0, void 0, function* () {
            const deployment = yield this.warp.deployFromSourceTx({
                srcTxId: Constants_1.TRUSTED_OFFER_SRC_TX_ID,
                wallet: this.signer,
                initState: INIT_STATE,
                evaluationManifest: {
                    evaluationOptions: { internalWrites: true },
                    plugins: ['evm-signature-verification', 'smartweave-extension-ethers'],
                }
            });
            const offer = this.getWarpContract(deployment.contractTxId);
            const nft = this.getWarpContract(nftContractId);
            yield nft.call({ function: 'transfer', tokenId: nftId, to: deployment.contractTxId });
            yield offer.call({
                function: 'create',
                nftContractId,
                nftId,
                price,
                priceTokenId,
                expirePeriod: 3600,
                receiver
            });
            return { offerId: deployment.contractTxId };
        });
    }
    getWarpContract(id) {
        return new SafeContract_1.SafeContract(this.warp, this.signer, id);
    }
    acceptEscrow(escrowId, offerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const escrow = new ethers_1.ethers.Contract(escrowId, TeleportEscrow_1.default.abi, this.evm);
            const stage = yield escrow.stage();
            if (stage !== 0) {
                throw Error(`Wrong stage of escrow: ${stage}`);
            }
            // TODO: I think we can't verify bytecode
            // if (byteCode !== TeleportEscrow.deployedBytecode) {
            //     throw Error(`Untrusted byte code`);
            // }
            const escrowOfferIdHash = yield escrow.offerIdHash();
            if (escrowOfferIdHash !== solidityKeccak(offerId)) {
                throw Error("Escrow was not created for this offer");
            }
            const offer = this.getWarpContract(offerId);
            const state = yield offer.read();
            const { priceTokenId: tokenId, price, owner } = state;
            const receiver = yield escrow.receiver();
            if (receiver !== owner) {
                throw Error(`You are not receiver of escrow`);
            }
            const erc20 = new ethers_1.ethers.Contract(tokenId, ERC20_1.default.abi, this.evm);
            const lockedFunds = yield erc20.balanceOf(escrowId);
            if (lockedFunds.toNumber() < Number.parseInt(price)) {
                throw Error(`Escrow is not funded`);
            }
            yield offer.call({
                function: 'acceptSeller',
            });
        });
    }
    finalize(escrowId, offerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const escrow = new ethers_1.ethers.Contract(escrowId, TeleportEscrow_1.default.abi, this.evm);
            const offer = this.getWarpContract(offerId);
            const state = yield offer.read();
            if (!state.password) {
                throw Error(`Password not relieved`);
            }
            yield escrow.connect(this.evmSigner).finalize(state.password).then((tx) => tx.wait());
        });
    }
}
exports.Seller = Seller;
