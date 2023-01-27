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
exports.Buyer = void 0;
const ethers_1 = require("ethers");
const TeleportEscrow_1 = __importDefault(require("./TeleportEscrow"));
const TeleportEscrowFactory_1 = __importDefault(require("./TeleportEscrowFactory"));
const ERC20_1 = __importDefault(require("./ERC20"));
const Constants_1 = require("./Constants");
const SafeContract_1 = require("./SafeContract");
function solidityKeccak(value) {
    return ethers_1.ethers.utils.keccak256(ethers_1.ethers.utils.defaultAbiCoder.encode(["string"], [value]));
}
class Buyer {
    constructor(warpSigner, warp, evm, evmSigner) {
        this.warpSigner = warpSigner;
        this.warp = warp;
        this.evm = evm;
        this.evmSigner = evmSigner;
    }
    acceptOffer(offerId, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const offerContract = new SafeContract_1.SafeContract(this.warp, this.warpSigner, offerId);
            let offerState = yield offerContract.read();
            yield this.verifyOffer(offerState, offerId);
            offerState = yield offerContract.call({ function: 'acceptBuyer', hashedPassword: solidityKeccak(password) });
            if (offerState.stage !== "ACCEPTED_BY_BUYER") {
                throw Error("Failed to read state");
            }
            const { erc20, escrow } = yield this.deployEscrow(Object.assign(Object.assign({}, offerState), { offerId }), password);
            yield this.fundEscrow(erc20, escrow, offerState.price);
            return { escrowId: escrow.address };
        });
    }
    finalize(offerId, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const offerContract = new SafeContract_1.SafeContract(this.warp, this.warpSigner, offerId);
            const offerState = yield offerContract.read();
            if (offerState.stage !== 'ACCEPTED_BY_SELLER') {
                throw Error(`Wrong offer stage: ${offerState.stage}`);
            }
            yield offerContract.call({ function: 'finalize', password });
        });
    }
    verifyOffer(offerState, offerId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (offerState.stage !== 'PENDING') {
                throw Error(`Wrong offer stage: ${offerState.stage}`);
            }
            const rawContract = yield fetch(`https://gateway.redstone.finance/gateway/contract?txId=${offerId}`).then(res => res.json()).catch(err => { throw Error('Gateway error'); });
            if (rawContract.srcTxId !== Constants_1.TRUSTED_OFFER_SRC_TX_ID) {
                throw Error(`Src Tx Id is not trusted: ${rawContract.srcTxId}`);
            }
            if (JSON.stringify(rawContract.initState) !== '{}') {
                throw Error(`Contract was initialized with init state: ${rawContract.initState}`);
            }
            return offerState;
        });
    }
    fundEscrow(erc20, escrow, price) {
        return __awaiter(this, void 0, void 0, function* () {
            yield erc20.connect(this.evmSigner).transfer(escrow.address, price, { gasLimit: 21000000 }).then((tx) => tx.wait());
        });
    }
    deployEscrow({ owner, price, priceTokenId, offerId }, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const offerIdHash = solidityKeccak(offerId);
            const erc20 = new ethers_1.ethers.Contract(priceTokenId, ERC20_1.default.abi, this.evm).connect(this.evmSigner);
            const escrowFactory = new ethers_1.ethers.Contract(Constants_1.ESCROW_FACTORY_ADDRESS, TeleportEscrowFactory_1.default.abi, this.evm).connect(this.evmSigner);
            const deployTx = yield escrowFactory.createNewEscrow(36000, owner, solidityKeccak(password), price, priceTokenId, offerIdHash).then((tx) => tx.wait());
            if (deployTx.events
                &&
                    deployTx.events.length >= 1
                &&
                    deployTx.events[0].args
                &&
                    deployTx.events[0].args.length >= 1) {
                const escrowAddress = deployTx.events[0].args[0];
                const escrow = new ethers_1.ethers.Contract(escrowAddress, TeleportEscrow_1.default.abi, this.evm).connect(this.evmSigner);
                return { erc20, escrow };
            }
            else {
                throw Error("Failed to get deployed escrow address");
            }
        });
    }
}
exports.Buyer = Buyer;
