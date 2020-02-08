import React from 'react';
import ProductListItem from './product-list-item';
const ProductList = (props) => {
    return (
        <React.Fragment>
            <div className="products-catagories-area clearfix">
                <div className="amado-pro-catagory clearfix">
                    { props.data && props.data.length > 0 ?
                    <ProductListItem data={props.data} />
                    : null
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProductList;