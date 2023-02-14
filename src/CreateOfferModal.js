import toast from 'react-hot-toast';
import { useState, } from 'react';
import * as Constants from './Constansts';

export function CreateOfferModal({ seller, addOffer, address }) {
    const [active, setActive] = useState(false);
    const [formData, setFormData] = useState({
        nftContractId: "",
        price: "",
        priceTokenId: Constants.DEFAULT_PAYMENT_TOKEN,
        receiver: address,
        matcherAddress: Constants.MATCHER_ADDRESS
    });

    const submitOffer = async () => {
        console.log({ createOffer: formData })
        await seller.createOffer(
            formData.nftContractId,
            formData.price.toString(),
            formData.priceTokenId,
            formData.receiver,
            { delegate: formData.matcherAddress, url: Constants.MATCHER_URL }
        )
            .then(({ offerId }) => {
                addOffer(offerId);
                toast.success("Created new offer!")
                setActive(false);
                setFormData({
                    nftContractId: "",
                    price: "",
                    priceTokenId: Constants.DEFAULT_PAYMENT_TOKEN,
                    receiver: address,
                    matcherAddress: Constants.MATCHER_ADDRESS
                })
            })
            .catch(err => toast.error(err.message))
    };


    return (
        <div className='mb-4'>
            <button className="button is-large is-light is-success" onClick={() => setActive(true)}>
                <span class="icon is-small">
                    <i class="fa-solid fa-plus"></i>
                </span>
                <span>Create offer</span>
            </button>
            <div class={`modal ${active ? "is-active" : ""}`}>
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Create offer</p>
                        <button class="delete" aria-label="close" onClick={() => setActive(false)}></button>
                    </header>
                    <section class="modal-card-body">

                        <div class="field">
                            <label class="label">NFT contract</label>
                            <div class="control">
                                <input class="input" type="text" onChange={e => setFormData({ ...formData, nftContractId: e.target.value })} value={formData.nftContractId} placeholder="NFT id" />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Payment in token</label>
                            <div class="select">
                                <select onChange={e => setFormData({ ...formData, priceTokenId: e.target.value.split('-')[1] })}>
                                    <option >{`USDT-${formData.priceTokenId}`}</option>
                                    <option >USDT-test</option>
                                </select>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Price</label>
                            <div class="control">
                                <input class="input" type="number" onChange={e => setFormData({ ...formData, price: Number(e.target.value) })} value={formData.price} placeholder="Price" />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Matcher address<br></br> leave empty, if u don't want to use automatic matcher</label>
                            <div class="control">
                                <input class="input" type="text" onChange={e => setFormData({ ...formData, matcherAddress: e.target.value })} value={formData.matcherAddress} placeholder="Matcher" />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Receiver</label>
                            <div class="control">
                                <input class="input" type="text" onChange={e => setFormData({ ...formData, receiver: e.target.value })} value={formData.receiver} />
                            </div>
                        </div>

                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-success" onClick={submitOffer}>Create</button>
                        <button class="button" onClick={() => setActive(false)}>Cancel</button>
                    </footer>
                </div>
            </div>
        </div>
    )
}