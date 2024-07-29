import { ADD_TO_CART, SET_INVENTORY } from './action';

const initialState = {
  inventory: [],
  cartList: [],
  totalAmount: 0,
  lastUpdated: null,
  timeout: 180000, // 3 minutes in milliseconds
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartList: [...state.cartList, action.item],
        totalAmount: state.totalAmount + action.item.price,
        lastUpdated: Date.now(),
      };
    case SET_INVENTORY:
      return {
        ...state,
        inventory: action.inventory,
      };
    default:
      return state;
  }
};

export default cartReducer;



