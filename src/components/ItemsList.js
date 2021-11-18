import { connect } from 'react-redux'

function ItemsList({items, addToCart}) {
  return (
    <ul>
      {items.map(i => 
        <li>
          <button onClick={() => addToCart(i.id, i.price)}>{i.name} - {i.price}</button>
        </li>
      )}
    </ul>
  )
}

export default connect(state => ({items: state.items}))(ItemsList)
