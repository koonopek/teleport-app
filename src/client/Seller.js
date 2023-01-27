var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { ethers } from "ethers";
import { TRUSTED_OFFER_SRC_TX_ID } from "./Constants";
import ERC20 from "./ERC20";
import { SafeContract } from "./SafeContract";
import TeleportEscrow from "./TeleportEscrow";
var INIT_STATE = JSON.stringify({});
function solidityKeccak(value) {
    return ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(["string"], [value]));
}
var Seller = /** @class */ (function () {
    function Seller(signer, warp, evm, evmSigner) {
        this.signer = signer;
        this.warp = warp;
        this.evm = evm;
        this.evmSigner = evmSigner;
    }
    Seller.prototype.createOffer = function (nftContractId, nftId, price, priceTokenId, receiver) {
        return __awaiter(this, void 0, void 0, function () {
            var deployment, offer, nft;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.warp.deployFromSourceTx({
                            srcTxId: TRUSTED_OFFER_SRC_TX_ID,
                            wallet: this.signer,
                            initState: INIT_STATE,
                            evaluationManifest: {
                                evaluationOptions: { internalWrites: true },
                                plugins: ['evm-signature-verification', 'smartweave-extension-ethers'],
                            }
                        })];
                    case 1:
                        deployment = _a.sent();
                        offer = this.getWarpContract(deployment.contractTxId);
                        nft = this.getWarpContract(nftContractId);
                        return [4 /*yield*/, nft.call({ function: 'transfer', tokenId: nftId, to: deployment.contractTxId })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, offer.call({
                                function: 'create',
                                nftContractId: nftContractId,
                                nftId: nftId,
                                price: price,
                                priceTokenId: priceTokenId,
                                expirePeriod: 3600,
                                receiver: receiver
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, { offerId: deployment.contractTxId }];
                }
            });
        });
    };
    Seller.prototype.getWarpContract = function (id) {
        return new SafeContract(this.warp, this.signer, id);
    };
    Seller.prototype.acceptEscrow = function (escrowId, offerId) {
        return __awaiter(this, void 0, void 0, function () {
            var escrow, stage, escrowOfferIdHash, offer, state, _a, tokenId, price, owner, receiver, erc20, lockedFunds;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        escrow = new ethers.Contract(escrowId, TeleportEscrow.abi, this.evm);
                        return [4 /*yield*/, escrow.stage()];
                    case 1:
                        stage = _b.sent();
                        if (stage !== 0) {
                            throw Error("Wrong stage of escrow: ".concat(stage));
                        }
                        return [4 /*yield*/, escrow.offerIdHash()];
                    case 2:
                        escrowOfferIdHash = _b.sent();
                        if (escrowOfferIdHash !== solidityKeccak(offerId)) {
                            throw Error("Escrow was not created for this offer");
                        }
                        offer = this.getWarpContract(offerId);
                        return [4 /*yield*/, offer.read()];
                    case 3:
                        state = _b.sent();
                        _a = state, tokenId = _a.priceTokenId, price = _a.price, owner = _a.owner;
                        return [4 /*yield*/, escrow.receiver()];
                    case 4:
                        receiver = _b.sent();
                        if (receiver !== owner) {
                            throw Error("You are not receiver of escrow");
                        }
                        erc20 = new ethers.Contract(tokenId, ERC20.abi, this.evm);
                        return [4 /*yield*/, erc20.balanceOf(escrowId)];
                    case 5:
                        lockedFunds = _b.sent();
                        if (lockedFunds.toNumber() < Number.parseInt(price)) {
                            throw Error("Escrow is not funded");
                        }
                        return [4 /*yield*/, offer.call({
                                function: 'acceptSeller',
                            })];
                    case 6:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Seller.prototype.finalize = function (escrowId, offerId) {
        return __awaiter(this, void 0, void 0, function () {
            var escrow, offer, state;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        escrow = new ethers.Contract(escrowId, TeleportEscrow.abi, this.evm);
                        offer = this.getWarpContract(offerId);
                        return [4 /*yield*/, offer.read()];
                    case 1:
                        state = _a.sent();
                        if (!state.password) {
                            throw Error("Password not relieved");
                        }
                        return [4 /*yield*/, escrow.connect(this.evmSigner).finalize(state.password).then(function (tx) { return tx.wait(); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Seller;
}());
export { Seller };
