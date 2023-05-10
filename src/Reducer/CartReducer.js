export const CartReducer = (state, action) => {
  const { type, payLoad } = action;
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartList: payLoad.products };
    case "REMOVE_FROM_CART":
      return { ...state, cartList: payLoad.products };
    case "UPDATE_TOTAL":
      return { ...state, total: payLoad.total };
    default:
      throw new Error("no Case  in call reducer");
  }
};
