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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SafeContract = void 0;
class SafeContract {
    constructor(warp, signer, address) {
        this.warp = warp;
        this.signer = signer;
        this.address = address;
        this.contract = warp.contract(address).setEvaluationOptions({ internalWrites: true }).connect(signer);
    }
    call(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.contract.writeInteraction(input);
            if (!response) {
                throw Error("No response from writing interaction");
            }
            const { cachedValue } = yield this.contract.readState();
            if (!cachedValue.validity[response.originalTxId]) {
                throw Error(`Contract evaluation failed: ${cachedValue.errorMessages[response.originalTxId]}`);
            }
            return cachedValue.state;
        });
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const { cachedValue } = yield this.contract.readState();
            return cachedValue.state;
        });
    }
}
exports.SafeContract = SafeContract;
