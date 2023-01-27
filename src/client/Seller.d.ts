import { ethers, Signer } from "ethers";
import { CustomSignature, Warp } from "warp-contracts";
export declare class Seller {
    private readonly signer;
    private readonly warp;
    private readonly evm;
    private readonly evmSigner;
    constructor(signer: CustomSignature, warp: Warp, evm: ethers.providers.JsonRpcProvider, evmSigner: Signer);
    createOffer(nftContractId: string, nftId: string, price: string, priceTokenId: string, receiver?: string): Promise<{
        offerId: string;
    }>;
    private getWarpContract;
    acceptEscrow(escrowId: string, offerId: string): Promise<void>;
    finalize(escrowId: string, offerId: string): Promise<void>;
}
//# sourceMappingURL=Seller.d.ts.map