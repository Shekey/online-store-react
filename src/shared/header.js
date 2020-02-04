import React from 'react'
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <React.Fragment>
            <div className="mobile-nav">
                <div className="amado-navbar-brand">
                    <a href="index.html"><img src="img/core-img/logo.png" alt="" /></a>
                </div>
                <div className="amado-navbar-toggler">
                    <span></span><span></span><span></span>
                </div>
            </div>
            <header className="header-area clearfix">
                <div className="nav-close">
                    <i className="fa fa-close" aria-hidden="true"></i>
                </div>
                <div className="logo">
                    <Link to="index.html"><img src="img/core-img/logo.png" alt="" /></Link>
                </div>
                <nav className="amado-nav">
                    <ul>
                        <li className="active"><Link to="index.html">Home</Link></li>
                        <li><Link to="shop.html">Shop</Link></li>
                        <li><Link to="product-details.html">Product</Link></li>
                        <li><Link to="cart.html">Cart</Link></li>
                        <li><Link to="checkout.html">Checkout</Link></li>
                    </ul>
                </nav>
                <div className="amado-btn-group mt-30 mb-100">
                    <Link to="#" className="btn amado-btn mb-15">%Discount%</Link>
                    <Link to="#" className="btn amado-btn active">New this week</Link>
                </div>
                <div className="cart-fav-search mb-100">
                    <Link to="cart.html" className="cart-nav"><img src="img/core-img/cart.png" alt="" /> Cart <span>(0)</span></Link>
                    <Link to="#" className="fav-nav"><img src="img/core-img/favorites.png" alt="" /> Favourite</Link>
                    <Link to="#" className="search-nav"><img src="img/core-img/search.png" alt="" /> Search</Link>
                </div>
                <div className="social-info d-flex justify-content-between">
                    <Link to="#"><i className="fa fa-pinterest" aria-hidden="true"></i></Link>
                    <Link to="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                    <Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                    <Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                </div>
            </header>
        </React.Fragment>
    )
}

export default header;