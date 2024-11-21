import { Basket2, Heart, List, Person, Search } from "react-bootstrap-icons"

const Header = () => {
    return(
        <header id="header">
            <div className="container">
                <div className="row header-main">
                    <div className="col-3 h-menu-main d-flex align-items-sm-center d-xl-none w-xs-3">
                        <div className="h-menu">
                            <span className="m-0 p-0"><List/></span>
                        </div>
                    </div>
                    <div className="col-3 h-logo d-flex align-items-center col-sm-6 justify-content-sm-center col-xl-3 w-xs-6">
                        <a href="#"><img src="../../../../public/logo.png" alt="logo" /></a>
                    </div>
                    <div className="col-5 h-list-main d-flex align-items-center d-sm-none d-xl-block col-xl-5 d-xs-none">
                        <ul className="d-flex h-list p-0 m-0">
                            <li className="px-3"><a href="#" className="home">Home</a></li>
                            <li className="px-3"><a href="#">Shope</a></li>
                            <li className="px-3"><a href="#">Page</a></li>
                            <li className="px-3"><a href="#">Blog</a></li>
                            <li className="px-3"><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-4 d-flex align-items-center justify-content-end col-sm-3 col-xl-4 w-xs-3">
                        <ul className="d-flex p-0 m-0">
                            <div className="ms-3 d-sm-none d-xl-block d-xs-none"><li className="list-icon" style={{background:"#f4f4f4"}}><a href="#" className="d-flex align-items-center justify-content-center"  style={{color: "#555555"}}><Search/></a></li></div>
                            <div className="ms-3 d-sm-none d-xl-block d-xs-none"><li className="list-icon" style={{background:"#e8f8f7"}}><a href="#" className="d-flex align-items-center justify-content-center"  style={{color: "#555555"}}><Person/></a></li></div>
                            <div className="ms-3 d-sm-none d-xl-block d-xs-none"><li className="list-icon" style={{background:"#f6f3e3"}}><a href="#" className="d-flex align-items-center justify-content-center"  style={{color: "#555555"}}><Heart/></a></li></div>
                            <div className="ms-3"><li className="list-icon" style={{background:"#f3e4dc"}}><a href="#" className="d-flex align-items-center justify-content-center"  style={{color: "#555555"}}><Basket2/></a></li></div>
                        </ul>
                        <span className="hp-price ms-3 d-sm-none d-xl-block d-xs-none d-xl-none d-xxl-block">£0.00</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header