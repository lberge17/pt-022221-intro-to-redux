import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import Cart from './components/Cart';
import ItemsList from './components/ItemsList';
import NavBar from './components/NavBar';

class App extends React.Component {
  state = {
    items: [
      {
        id: 1,
        name: "fall pumpkins",
        price: 10
      },
      {
        id: 2,
        name: "candy corn",
        price: 5
      },
      {
        id: 3,
        name: "assorted popcorn",
        price: 20
      },
      {
        id: 4,
        name: "Scarecrow",
        price: 30
      }
    ],
    cart: [1,1,3,4],
    total: 70
  }

  addToCart = (itemId, price) => {
    this.setState(prevState => ({
      cart: [...prevState.cart, itemId],
      total: prevState.total + price
    }))
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
              items={this.state.items} 
            />}
          />
          <Route exact path="/cart" render={routerProps => 
            <Cart 
              cart={this.state.cart}  
              items={this.state.items} 
              total={this.state.total} 
              routerProps={routerProps} 
            />}
           />
        </Switch>
      </div>
    );
  }
}

export default App;
