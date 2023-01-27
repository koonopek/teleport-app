import { CustomSignature, Warp } from "warp-contracts";
import { ethers, Signer } from 'ethers';
export declare class Buyer {
    private readonly warpSigner;
    private readonly warp;
    private readonly evm;
    private readonly evmSigner;
    constructor(warpSigner: CustomSignature, warp: Warp, evm: ethers.providers.JsonRpcProvider, evmSigner: Signer);
    acceptOffer(offerId: string, password: string): Promise<{
        escrowId: string;
    }>;
    finalize(offerId: string, password: string): Promise<void>;
    private verifyOffer;
    private fundEscrow;
    deployEscrow({ owner, price, priceTokenId, offerId }: any, password: string): Promise<{
        erc20: ethers.Contract;
        escrow: ethers.Contract;
    }>;
}
//# sourceMappingURL=Buyer.d.ts.map