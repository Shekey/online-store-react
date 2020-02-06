import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getCategoriesHomePage } from '../store/actions';
import ProductList from '../components/product-list';

class ProductCategories extends PureComponent {
    componentDidMount(){
        this.props.getCategoriesHomePage();
    }

    render() {
        return (
            <ProductList data={this.props.allCategoriesHomePage}/>
        );
    }
}

function mapStateToProps(state) {
    return {
      allCategoriesHomePage: state.storeReducer.categoriesHomePage
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getCategoriesHomePage }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategories)