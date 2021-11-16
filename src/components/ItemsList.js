export default function ItemsList({items, addToCart}) {
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
