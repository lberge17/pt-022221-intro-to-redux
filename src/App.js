import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import Cart from './components/Cart';
import ItemsList from './components/ItemsList';
import NavBar from './components/NavBar';

class App extends React.Component {

  addToCart = (itemId, price) => {
    // this.setState(prevState => ({
    //   cart: [...prevState.cart, itemId],
    //   total: prevState.total + price
    // }))
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>Intro to Redux STORE</h1>
        <Switch>
          <Route exact path="/items" render={routerProps => 
            <ItemsList 
              routerProps={routerProps} 
              addToCart={this.addToCart} 
            />}
          />
          <Route exact path="/cart" render={routerProps => 
            <Cart 
              routerProps={routerProps} 
            />}
           />
        </Switch>
      </div>
    );
  }
}

// function mapStateToProps(reduxStoreState){
//   return {
//     items: reduxStoreState.items,
//     cart: reduxStoreState.cart,
//     total: reduxStoreState.total
//   }
// }

export default App;
