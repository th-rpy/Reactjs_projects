import logo from './logo.svg';
import './App.css';
import React from 'react';
import products from "./Data";
import Product from "./components/ProductList"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 

    return (

      <div className="App">
          <p> Products List </p>
            {products.map( (product,index) => <Product name = { product.name } price = { product.price } marque = { product.marque }/> )}
      </div>

    );
  }
}
 
export default App;
