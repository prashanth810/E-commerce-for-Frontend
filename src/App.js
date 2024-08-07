import logo from './logo.svg';
import './App.css';
import { useEffect, useReducer } from 'react';
import { CartReducer } from './Reducers/CartReducer';
import Cart from './Components/Cart';
import Products from './Components/Products';
import Navbarheader from './Nav/Navbarheader';

function App() {
  const [state, dispatch] = useReducer(CartReducer, {
    products: [],
    cart: [],
  });
  console.log(state)

  useEffect(() => {
    getapi();
  }, []);

  const getapi = () => {
    const { data } = fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((result) => {
        dispatch({
          type: "ADD_ITEM",
          payload: result.products,
        })
      })
  }

  return (
    <div style={{ fontFamily: 'monospace' }}>
      <Navbarheader />
      <div style={{ display: 'flex' }}>
        <Products state={state} dispatch={dispatch} />
        <Cart state={state} dispatch={dispatch} />
      </div>

    </div>
  );
}

export default App;
