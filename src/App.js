import React from 'react';
import Footer from './shared/footer';
import Newsletter from './shared/newsletter';
import Header from './shared/header';
import Search from './shared/search';
import ProductCategories from './containers/product-categories';
import ProductDetails from './containers/product-details';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Search />
      <div className="main-content-wrapper d-flex clearfix">
      <Header />
      <Switch>
        <Route path="/" component={ProductCategories} exact />
        <Route path="/product/:id" component={ProductDetails} exact />
      </Switch>
      </div>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
