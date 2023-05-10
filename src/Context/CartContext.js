import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../Reducer/CartReducer";
const initialState = {
  cartList: [],
  total: 0,
};
const myContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (product) => {
    const newCartList = state.cartList.concat(product);
    calcTotal(newCartList);
    dispatch({
      type: "ADD_TO_CART",
      payLoad: {
        products: newCartList,
      },
    });
  };
  const removeFromCart = (product) => {
    const newCartList = state.cartList.filter((item) => item.id !== product.id);
    calcTotal(newCartList);
    dispatch({
      type: "REMOVE_FROM_CART",
      payLoad: {
        products: newCartList,
      },
    });
  };
  const calcTotal = (products) => {
    let total = 0;
    products.forEach((item) => (total = total + item.price));
    dispatch({
      type: "UPDATE_TOTAL",
      payLoad: {
        total: total,
      },
    });
  };
  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart,
  };
  return <myContext.Provider value={value}>{children}</myContext.Provider>;
};
export const useCart = () => {
  const value = useContext(myContext);
  console.log(value);
  return value;
};
