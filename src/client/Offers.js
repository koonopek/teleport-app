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
exports.batchEvaluateOffers = exports.fetchAllOffersId = exports.listenForNewEscrowByOfferId = exports.fetchEscrowsByOfferId = void 0;
const ethers_1 = require("ethers");
const Constants_1 = require("./Constants");
const TeleportEscrowFactory_1 = __importDefault(require("./TeleportEscrowFactory"));
function solidityKeccak(value) {
    return ethers_1.ethers.utils.keccak256(ethers_1.ethers.utils.defaultAbiCoder.encode(["string"], [value]));
}
function fetchEscrowsByOfferId(evmProvider, forOfferId) {
    return __awaiter(this, void 0, void 0, function* () {
        const contract = new ethers_1.Contract(Constants_1.ESCROW_FACTORY_ADDRESS, TeleportEscrowFactory_1.default.abi, evmProvider);
        const forOfferIdHash = solidityKeccak(forOfferId);
        const filter = contract.filters.NewTeleportEscrow(null, forOfferIdHash);
        const events = yield contract.queryFilter(filter);
        return events.map(event => {
            var _a;
            return ({
                id: (_a = event === null || event === void 0 ? void 0 : event.args) === null || _a === void 0 ? void 0 : _a.instance,
            });
        });
    });
}
exports.fetchEscrowsByOfferId = fetchEscrowsByOfferId;
function listenForNewEscrowByOfferId(evmProvider, forOfferId, listener) {
    return __awaiter(this, void 0, void 0, function* () {
        const contract = new ethers_1.Contract(Constants_1.ESCROW_FACTORY_ADDRESS, TeleportEscrowFactory_1.default.abi, evmProvider);
        const forOfferIdHash = solidityKeccak(forOfferId);
        const filter = contract.filters.NewTeleportEscrow(null, forOfferIdHash);
        contract.on(filter, listener);
    });
}
exports.listenForNewEscrowByOfferId = listenForNewEscrowByOfferId;
function fetchAllOffersId(limit = 5000) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://gateway.redstone.finance/gateway/contracts-by-source?id=${Constants_1.TRUSTED_OFFER_SRC_TX_ID}&limit=${limit}&sort=desc`).then(resp => resp.json());
        if (response.paging.total >= limit) {
            throw Error("Paging not implemented for /gateway/contracts-by-source");
        }
        return response;
    });
}
exports.fetchAllOffersId = fetchAllOffersId;
function batchEvaluateOffers(warp, contracts, batchSize = 10) {
    return __awaiter(this, void 0, void 0, function* () {
        const all = [];
        let promises = [];
        for (let i = 0; i < contracts.length; i++) {
            const result = warp.contract(contracts[i].contractId)
                .setEvaluationOptions({ internalWrites: true })
                .readState()
                .then((value) => (Object.assign(Object.assign({}, value.cachedValue.state), { id: contracts[i].contractId, creator: contracts[i].owner })));
            promises.push(result);
            if (i % batchSize === batchSize - 1) {
                all.push(...(yield Promise.all(promises)));
                promises = [];
            }
        }
        all.push(...(yield Promise.all(promises)));
        return all;
    });
}
exports.batchEvaluateOffers = batchEvaluateOffers;
