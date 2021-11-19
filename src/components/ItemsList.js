import { connect } from 'react-redux';
import { addToCart } from '../redux/actions';

function ItemsList(props) {
  console.log(props)
  return (
    <ul>
      {props.items.map(i => 
        <li key={i.id}>
          <button onClick={() => props.addToCart(i)}>{i.name} - {i.price}</button>
        </li>
      )}
    </ul>
  )
}

const mapStateToProps = state => ({items: state.items})

// const mapDispatchToProps = dispatch => {
//   return {
//     dispatchAddToCart: (item) => dispatch(addToCart(item))
//   }
// }

export default connect(mapStateToProps, { addToCart })(ItemsList)
