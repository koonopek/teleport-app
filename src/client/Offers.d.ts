import { ethers } from "ethers";
import { Warp } from "warp-contracts";
type FetchedEscrow = {
    id: string;
};
export declare function fetchEscrowsByOfferId(evmProvider: ethers.providers.JsonRpcProvider, forOfferId: string): Promise<FetchedEscrow[]>;
export declare function listenForNewEscrowByOfferId(evmProvider: ethers.providers.JsonRpcProvider, forOfferId: string, listener: (escrow: FetchedEscrow) => void): Promise<void>;
type ContractBySource = {
    "contractId": string;
    "owner": string;
    "bundlerTxId": string;
    "blockHeight": number;
    "blockTimestamp": string;
    "interactions": string;
};
export declare function fetchAllOffersId(limit?: number): Promise<{
    contracts: ContractBySource[];
    pages: any;
}>;
export declare function batchEvaluateOffers(warp: Warp, contracts: ContractBySource[], batchSize?: number): Promise<any[]>;
export {};
//# sourceMappingURL=Offers.d.ts.map