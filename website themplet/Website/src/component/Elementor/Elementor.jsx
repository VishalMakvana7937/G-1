import { ChevronDoubleRight, Telephone } from "react-bootstrap-icons"

const Elementor = () => {
    return(
        <section id="elementor" className="mb-107">
            <div className="container">
                <div className="row">
                    <div className="col-4 mb-4 elementor-main-001 col-sm-12 col-xl-4 col-lg-4 w-xs-12">
                        <div className="elementor-img-001">
                            <div className="elementor-contain-001">
                                <h3>Up to 25% off</h3>
                                <h2 className="mb-5">Opening <br /> Soon Shushi</h2>
                                <a href="#">Shop Now <span><ChevronDoubleRight/></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 mb-4 elementor-main-002 col-sm-12 col-xl-3 col-lg-3 w-xs-12">
                        <div className="elementor-position-img-001">
                            <img src="../../../../public/elementor2.png" alt="elementor2" />
                        </div>
                        <div className="elementor-main-contain">
                            <div className="elementor-img-002">
                                <div className="elementor-border-002">
                                    <p className="mb-2">You’re invited to our </p>
                                    <h2>Grand</h2>
                                    <h3>Opening</h3>
                                    <span>29.11.2022</span>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-position-img-002">
                            <img src="../../../../public/elementor3.png" alt="elementor3" />
                        </div>
                    </div>
                    <div className="col-5 mb-4 col-sm-12 col-xl-5 col-lg-5 w-xs-12">
                        <div className="elementor-img-003">
                            <div className="elementor-img-003">
                                <div className="elementor-contain-003">
                                    <h3>Best Seller</h3>
                                    <h2 className="mb-1">Save 50%</h2>
                                    <h4 className="mb-5">Fresh & Organic</h4>
                                    <a href="#">Shop Now <span><ChevronDoubleRight/></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 col-sm-12 mb-4 col-lg-5 w-xs-12 d-xs-none">
                        <div className="elementor-img-004">
                            <div className="elementor-contain-004">
                                <h2>Extra Strong <br /> Coffee</h2>
                                <p className="mb-5">The most consumed drink in the world!</p>
                                <a href="#">Shop Now <span><ChevronDoubleRight/></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-12 mb-4 col-lg-4 w-xs-12">
                        <div className="elementor-img-005">
                            <div className="elementor-contain-005">
                                <h3 className="mb-1">Summer Sale</h3>
                                <h2>Fresh Fruits</h2>
                                <p className="mb-5">When customers buy <br /> online!</p>
                                <ul className="m-0 p-0">
                                    <li className="elementor-contact"><span><Telephone/></span>Order now:</li>
                                    <li className="elementor-number">(1800)-88-66-991</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-sm-12 mb-4 col-lg-3 elementor-main-006 w-xs-12">
                        <div className="elementor-position-img-001">
                            <img src="../../../../public/elementor7.png" alt="elementor7" />
                        </div>
                        <div className="elementor-main-contain-006">
                            <div className="elementor-img-006">
                                <div className="elementor-border-006 text-center">
                                    <h3 className="pt-5 mb-0">Special Offer</h3>
                                    <h2>Free Shipping</h2>
                                    <p className="mb-5">Online store only!</p>
                                    <a href="#">Shop Now <span><ChevronDoubleRight/></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-position-img-002">
                            <img src="../../../../public/elementor8.png" alt="elementor8" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Elementor