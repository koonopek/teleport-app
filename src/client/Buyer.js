var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { ethers } from 'ethers';
import EscrowEvm from './TeleportEscrow';
import EscrowFactoryEvm from './TeleportEscrowFactory';
import ERC20 from "./ERC20";
import { ESCROW_FACTORY_ADDRESS, TRUSTED_OFFER_SRC_TX_ID } from "./Constants";
import { SafeContract } from "./SafeContract";
function solidityKeccak(value) {
    return ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(["string"], [value]));
}
var Buyer = /** @class */ (function () {
    function Buyer(warpSigner, warp, evm, evmSigner) {
        this.warpSigner = warpSigner;
        this.warp = warp;
        this.evm = evm;
        this.evmSigner = evmSigner;
    }
    Buyer.prototype.acceptOffer = function (offerId, password) {
        return __awaiter(this, void 0, void 0, function () {
            var offerContract, offerState, _a, erc20, escrow;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        offerContract = new SafeContract(this.warp, this.warpSigner, offerId);
                        return [4 /*yield*/, offerContract.read()];
                    case 1:
                        offerState = _b.sent();
                        return [4 /*yield*/, this.verifyOffer(offerState, offerId)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, offerContract.call({ function: 'acceptBuyer', hashedPassword: solidityKeccak(password) })];
                    case 3:
                        offerState = _b.sent();
                        if (offerState.stage !== "ACCEPTED_BY_BUYER") {
                            throw Error("Failed to read state");
                        }
                        return [4 /*yield*/, this.deployEscrow(__assign(__assign({}, offerState), { offerId: offerId }), password)];
                    case 4:
                        _a = _b.sent(), erc20 = _a.erc20, escrow = _a.escrow;
                        return [4 /*yield*/, this.fundEscrow(erc20, escrow, offerState.price)];
                    case 5:
                        _b.sent();
                        return [2 /*return*/, { escrowId: escrow.address }];
                }
            });
        });
    };
    Buyer.prototype.finalize = function (offerId, password) {
        return __awaiter(this, void 0, void 0, function () {
            var offerContract, offerState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        offerContract = new SafeContract(this.warp, this.warpSigner, offerId);
                        return [4 /*yield*/, offerContract.read()];
                    case 1:
                        offerState = _a.sent();
                        if (offerState.stage !== 'ACCEPTED_BY_SELLER') {
                            throw Error("Wrong offer stage: ".concat(offerState.stage));
                        }
                        return [4 /*yield*/, offerContract.call({ function: 'finalize', password: password })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Buyer.prototype.verifyOffer = function (offerState, offerId) {
        return __awaiter(this, void 0, void 0, function () {
            var rawContract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (offerState.stage !== 'PENDING') {
                            throw Error("Wrong offer stage: ".concat(offerState.stage));
                        }
                        return [4 /*yield*/, fetch("https://gateway.redstone.finance/gateway/contract?txId=".concat(offerId)).then(function (res) { return res.json(); }).catch(function (err) { throw Error('Gateway error'); })];
                    case 1:
                        rawContract = _a.sent();
                        if (rawContract.srcTxId !== TRUSTED_OFFER_SRC_TX_ID) {
                            throw Error("Src Tx Id is not trusted: ".concat(rawContract.srcTxId));
                        }
                        if (JSON.stringify(rawContract.initState) !== '{}') {
                            throw Error("Contract was initialized with init state: ".concat(rawContract.initState));
                        }
                        return [2 /*return*/, offerState];
                }
            });
        });
    };
    Buyer.prototype.fundEscrow = function (erc20, escrow, price) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, erc20.connect(this.evmSigner).transfer(escrow.address, price, { gasLimit: 21000000 }).then(function (tx) { return tx.wait(); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Buyer.prototype.deployEscrow = function (_a, password) {
        var owner = _a.owner, price = _a.price, priceTokenId = _a.priceTokenId, offerId = _a.offerId;
        return __awaiter(this, void 0, void 0, function () {
            var offerIdHash, erc20, escrowFactory, deployTx, escrowAddress, escrow;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        offerIdHash = solidityKeccak(offerId);
                        erc20 = new ethers.Contract(priceTokenId, ERC20.abi, this.evm).connect(this.evmSigner);
                        escrowFactory = new ethers.Contract(ESCROW_FACTORY_ADDRESS, EscrowFactoryEvm.abi, this.evm).connect(this.evmSigner);
                        return [4 /*yield*/, escrowFactory.createNewEscrow(36000, owner, solidityKeccak(password), price, priceTokenId, offerIdHash).then(function (tx) { return tx.wait(); })];
                    case 1:
                        deployTx = _b.sent();
                        if (deployTx.events
                            &&
                                deployTx.events.length >= 1
                            &&
                                deployTx.events[0].args
                            &&
                                deployTx.events[0].args.length >= 1) {
                            escrowAddress = deployTx.events[0].args[0];
                            escrow = new ethers.Contract(escrowAddress, EscrowEvm.abi, this.evm).connect(this.evmSigner);
                            return [2 /*return*/, { erc20: erc20, escrow: escrow }];
                        }
                        else {
                            throw Error("Failed to get deployed escrow address");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return Buyer;
}());
export { Buyer };
