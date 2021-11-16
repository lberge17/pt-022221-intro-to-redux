export default function Cart({items, cart, total}) {

  function displayCart(){
    return (
      <div>
        <ul>
          {cart.map(cartItem => {
            const item = items.find(i => i.id === cartItem)
            return <li>{item.name}</li>
          })}
        </ul>
        <p>Total: ${total}</p>
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
