import React from 'react';
import { Link } from 'react-router-dom';
import ProductDetails from '../containers/product-details';


const ProductListItem = (props) => {
    return (
        <React.Fragment>
            {props.data && props.data.length > 0 ?
              props.data.map(item => (
                <div className="single-products-catagory clearfix" key={item.id}>
                    <Link to={`/product/1`}>
                        <img src={item.imgSrc} alt="" />

                        <div className="hover-content">
                            <div className="line"></div>
                            <p>From {item.price}</p>
                            <h4>{item.name}</h4>
                        </div>
                    </Link>
                </div>
              ))
            : null
            }

            {
                props.data && props.data.length > 0 ?
                 importScripts()
                :null
            }
        </React.Fragment>
    );
}

function importScripts() {
    const script1 = document.createElement("script");
    script1.src = "js/active.js";
    document.body.appendChild(script1);
}

export default ProductListItem;