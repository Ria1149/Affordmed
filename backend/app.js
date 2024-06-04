import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/categories/:categoryname/products" component={ProductList} />
                    <Route exact path="/categories/:categoryname/products/:productid" component={ProductDetail} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;