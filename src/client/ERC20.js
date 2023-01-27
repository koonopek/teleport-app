"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "_format": "hh-sol-artifact-1",
    "contractName": "TestERC20",
    "sourceName": "contracts/TestERC20.sol",
    "abi": [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "subtractedValue",
                    "type": "uint256"
                }
            ],
            "name": "decreaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "addedValue",
                    "type": "uint256"
                }
            ],
            "name": "increaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "testMint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": "0x60806040523480156200001157600080fd5b506040518060400160405280600681526020017f446f6c6c617200000000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f5553445400000000000000000000000000000000000000000000000000000000815250816003908051906020019062000096929190620000b8565b508060049080519060200190620000af929190620000b8565b505050620001cd565b828054620000c69062000197565b90600052602060002090601f016020900481019282620000ea576000855562000136565b82601f106200010557805160ff191683800117855562000136565b8280016001018555821562000136579182015b828111156200013557825182559160200191906001019062000118565b5b50905062000145919062000149565b5090565b5b80821115620001645760008160009055506001016200014a565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620001b057607f821691505b60208210811415620001c757620001c662000168565b5b50919050565b61145780620001dd6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a08231146101a357806395d89b41146101d3578063a457c2d7146101f1578063a9059cbb14610221578063dd62ed3e14610251578063f28e093d14610281576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd1461010757806323b872dd14610125578063313ce567146101555780633950935114610173575b600080fd5b6100c161029d565b6040516100ce9190610ca5565b60405180910390f35b6100f160048036038101906100ec9190610d60565b61032f565b6040516100fe9190610dbb565b60405180910390f35b61010f610352565b60405161011c9190610de5565b60405180910390f35b61013f600480360381019061013a9190610e00565b61035c565b60405161014c9190610dbb565b60405180910390f35b61015d61038b565b60405161016a9190610e6f565b60405180910390f35b61018d60048036038101906101889190610d60565b610394565b60405161019a9190610dbb565b60405180910390f35b6101bd60048036038101906101b89190610e8a565b6103cb565b6040516101ca9190610de5565b60405180910390f35b6101db610413565b6040516101e89190610ca5565b60405180910390f35b61020b60048036038101906102069190610d60565b6104a5565b6040516102189190610dbb565b60405180910390f35b61023b60048036038101906102369190610d60565b61051c565b6040516102489190610dbb565b60405180910390f35b61026b60048036038101906102669190610eb7565b61053f565b6040516102789190610de5565b60405180910390f35b61029b60048036038101906102969190610d60565b6105c6565b005b6060600380546102ac90610f26565b80601f01602080910402602001604051908101604052809291908181526020018280546102d890610f26565b80156103255780601f106102fa57610100808354040283529160200191610325565b820191906000526020600020905b81548152906001019060200180831161030857829003601f168201915b5050505050905090565b60008061033a6105d4565b90506103478185856105dc565b600191505092915050565b6000600254905090565b6000806103676105d4565b90506103748582856107a7565b61037f858585610833565b60019150509392505050565b60006012905090565b60008061039f6105d4565b90506103c08185856103b1858961053f565b6103bb9190610f87565b6105dc565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461042290610f26565b80601f016020809104026020016040519081016040528092919081815260200182805461044e90610f26565b801561049b5780601f106104705761010080835404028352916020019161049b565b820191906000526020600020905b81548152906001019060200180831161047e57829003601f168201915b5050505050905090565b6000806104b06105d4565b905060006104be828661053f565b905083811015610503576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104fa9061104f565b60405180910390fd5b61051082868684036105dc565b60019250505092915050565b6000806105276105d4565b9050610534818585610833565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6105d08282610aab565b5050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561064c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610643906110e1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156106bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b390611173565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161079a9190610de5565b60405180910390a3505050565b60006107b3848461053f565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461082d578181101561081f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610816906111df565b60405180910390fd5b61082c84848484036105dc565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156108a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089a90611271565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610913576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090a90611303565b60405180910390fd5b61091e838383610c02565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156109a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099b90611395565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a929190610de5565b60405180910390a3610aa5848484610c07565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b1b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1290611401565b60405180910390fd5b610b2760008383610c02565b8060026000828254610b399190610f87565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610bea9190610de5565b60405180910390a3610bfe60008383610c07565b5050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c46578082015181840152602081019050610c2b565b83811115610c55576000848401525b50505050565b6000601f19601f8301169050919050565b6000610c7782610c0c565b610c818185610c17565b9350610c91818560208601610c28565b610c9a81610c5b565b840191505092915050565b60006020820190508181036000830152610cbf8184610c6c565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610cf782610ccc565b9050919050565b610d0781610cec565b8114610d1257600080fd5b50565b600081359050610d2481610cfe565b92915050565b6000819050919050565b610d3d81610d2a565b8114610d4857600080fd5b50565b600081359050610d5a81610d34565b92915050565b60008060408385031215610d7757610d76610cc7565b5b6000610d8585828601610d15565b9250506020610d9685828601610d4b565b9150509250929050565b60008115159050919050565b610db581610da0565b82525050565b6000602082019050610dd06000830184610dac565b92915050565b610ddf81610d2a565b82525050565b6000602082019050610dfa6000830184610dd6565b92915050565b600080600060608486031215610e1957610e18610cc7565b5b6000610e2786828701610d15565b9350506020610e3886828701610d15565b9250506040610e4986828701610d4b565b9150509250925092565b600060ff82169050919050565b610e6981610e53565b82525050565b6000602082019050610e846000830184610e60565b92915050565b600060208284031215610ea057610e9f610cc7565b5b6000610eae84828501610d15565b91505092915050565b60008060408385031215610ece57610ecd610cc7565b5b6000610edc85828601610d15565b9250506020610eed85828601610d15565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610f3e57607f821691505b60208210811415610f5257610f51610ef7565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f9282610d2a565b9150610f9d83610d2a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610fd257610fd1610f58565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611039602583610c17565b915061104482610fdd565b604082019050919050565b600060208201905081810360008301526110688161102c565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006110cb602483610c17565b91506110d68261106f565b604082019050919050565b600060208201905081810360008301526110fa816110be565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061115d602283610c17565b915061116882611101565b604082019050919050565b6000602082019050818103600083015261118c81611150565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006111c9601d83610c17565b91506111d482611193565b602082019050919050565b600060208201905081810360008301526111f8816111bc565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061125b602583610c17565b9150611266826111ff565b604082019050919050565b6000602082019050818103600083015261128a8161124e565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006112ed602383610c17565b91506112f882611291565b604082019050919050565b6000602082019050818103600083015261131c816112e0565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061137f602683610c17565b915061138a82611323565b604082019050919050565b600060208201905081810360008301526113ae81611372565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006113eb601f83610c17565b91506113f6826113b5565b602082019050919050565b6000602082019050818103600083015261141a816113de565b905091905056fea2646970667358221220d0d11f3b8d9ca3ea8338c63ca7f79246f79fe6943e47883758c8acca7bc3fd6f64736f6c63430008090033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a08231146101a357806395d89b41146101d3578063a457c2d7146101f1578063a9059cbb14610221578063dd62ed3e14610251578063f28e093d14610281576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd1461010757806323b872dd14610125578063313ce567146101555780633950935114610173575b600080fd5b6100c161029d565b6040516100ce9190610ca5565b60405180910390f35b6100f160048036038101906100ec9190610d60565b61032f565b6040516100fe9190610dbb565b60405180910390f35b61010f610352565b60405161011c9190610de5565b60405180910390f35b61013f600480360381019061013a9190610e00565b61035c565b60405161014c9190610dbb565b60405180910390f35b61015d61038b565b60405161016a9190610e6f565b60405180910390f35b61018d60048036038101906101889190610d60565b610394565b60405161019a9190610dbb565b60405180910390f35b6101bd60048036038101906101b89190610e8a565b6103cb565b6040516101ca9190610de5565b60405180910390f35b6101db610413565b6040516101e89190610ca5565b60405180910390f35b61020b60048036038101906102069190610d60565b6104a5565b6040516102189190610dbb565b60405180910390f35b61023b60048036038101906102369190610d60565b61051c565b6040516102489190610dbb565b60405180910390f35b61026b60048036038101906102669190610eb7565b61053f565b6040516102789190610de5565b60405180910390f35b61029b60048036038101906102969190610d60565b6105c6565b005b6060600380546102ac90610f26565b80601f01602080910402602001604051908101604052809291908181526020018280546102d890610f26565b80156103255780601f106102fa57610100808354040283529160200191610325565b820191906000526020600020905b81548152906001019060200180831161030857829003601f168201915b5050505050905090565b60008061033a6105d4565b90506103478185856105dc565b600191505092915050565b6000600254905090565b6000806103676105d4565b90506103748582856107a7565b61037f858585610833565b60019150509392505050565b60006012905090565b60008061039f6105d4565b90506103c08185856103b1858961053f565b6103bb9190610f87565b6105dc565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461042290610f26565b80601f016020809104026020016040519081016040528092919081815260200182805461044e90610f26565b801561049b5780601f106104705761010080835404028352916020019161049b565b820191906000526020600020905b81548152906001019060200180831161047e57829003601f168201915b5050505050905090565b6000806104b06105d4565b905060006104be828661053f565b905083811015610503576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104fa9061104f565b60405180910390fd5b61051082868684036105dc565b60019250505092915050565b6000806105276105d4565b9050610534818585610833565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6105d08282610aab565b5050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561064c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610643906110e1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156106bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b390611173565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161079a9190610de5565b60405180910390a3505050565b60006107b3848461053f565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461082d578181101561081f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610816906111df565b60405180910390fd5b61082c84848484036105dc565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156108a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089a90611271565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610913576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090a90611303565b60405180910390fd5b61091e838383610c02565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156109a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099b90611395565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a929190610de5565b60405180910390a3610aa5848484610c07565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b1b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1290611401565b60405180910390fd5b610b2760008383610c02565b8060026000828254610b399190610f87565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610bea9190610de5565b60405180910390a3610bfe60008383610c07565b5050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c46578082015181840152602081019050610c2b565b83811115610c55576000848401525b50505050565b6000601f19601f8301169050919050565b6000610c7782610c0c565b610c818185610c17565b9350610c91818560208601610c28565b610c9a81610c5b565b840191505092915050565b60006020820190508181036000830152610cbf8184610c6c565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610cf782610ccc565b9050919050565b610d0781610cec565b8114610d1257600080fd5b50565b600081359050610d2481610cfe565b92915050565b6000819050919050565b610d3d81610d2a565b8114610d4857600080fd5b50565b600081359050610d5a81610d34565b92915050565b60008060408385031215610d7757610d76610cc7565b5b6000610d8585828601610d15565b9250506020610d9685828601610d4b565b9150509250929050565b60008115159050919050565b610db581610da0565b82525050565b6000602082019050610dd06000830184610dac565b92915050565b610ddf81610d2a565b82525050565b6000602082019050610dfa6000830184610dd6565b92915050565b600080600060608486031215610e1957610e18610cc7565b5b6000610e2786828701610d15565b9350506020610e3886828701610d15565b9250506040610e4986828701610d4b565b9150509250925092565b600060ff82169050919050565b610e6981610e53565b82525050565b6000602082019050610e846000830184610e60565b92915050565b600060208284031215610ea057610e9f610cc7565b5b6000610eae84828501610d15565b91505092915050565b60008060408385031215610ece57610ecd610cc7565b5b6000610edc85828601610d15565b9250506020610eed85828601610d15565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610f3e57607f821691505b60208210811415610f5257610f51610ef7565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f9282610d2a565b9150610f9d83610d2a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610fd257610fd1610f58565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611039602583610c17565b915061104482610fdd565b604082019050919050565b600060208201905081810360008301526110688161102c565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006110cb602483610c17565b91506110d68261106f565b604082019050919050565b600060208201905081810360008301526110fa816110be565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061115d602283610c17565b915061116882611101565b604082019050919050565b6000602082019050818103600083015261118c81611150565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006111c9601d83610c17565b91506111d482611193565b602082019050919050565b600060208201905081810360008301526111f8816111bc565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061125b602583610c17565b9150611266826111ff565b604082019050919050565b6000602082019050818103600083015261128a8161124e565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006112ed602383610c17565b91506112f882611291565b604082019050919050565b6000602082019050818103600083015261131c816112e0565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061137f602683610c17565b915061138a82611323565b604082019050919050565b600060208201905081810360008301526113ae81611372565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006113eb601f83610c17565b91506113f6826113b5565b602082019050919050565b6000602082019050818103600083015261141a816113de565b905091905056fea2646970667358221220d0d11f3b8d9ca3ea8338c63ca7f79246f79fe6943e47883758c8acca7bc3fd6f64736f6c63430008090033",
    "linkReferences": {},
    "deployedLinkReferences": {}
};
