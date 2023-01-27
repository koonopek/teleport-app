import { Contract, Warp, CustomSignature } from "warp-contracts";
export declare class SafeContract {
    private readonly warp;
    private readonly signer;
    private readonly address;
    readonly contract: Contract;
    constructor(warp: Warp, signer: CustomSignature, address: string);
    call(input: Record<string, any>): Promise<unknown>;
    read(): Promise<any>;
}
//# sourceMappingURL=SafeContract.d.ts.map