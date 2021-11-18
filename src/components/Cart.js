import { connect } from 'react-redux';

function Cart(props) {

  function displayCart(){
    return (
      <div>
        <ul>
          {props.cart.map(cartItem => {
            const item = props.items.find(i => i.id === cartItem)
            return <li>{item.name}</li>
          })}
        </ul>
        <p>Total: ${props.total}</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {displayCart()}
    </div>
  )
}

function mapStateToProps(state){
  return {
    items: state.items,
    cart: state.cart,
    total: state.total
  }
}

export default connect(mapStateToProps)(Cart)
