export const ADD_TO_CART = "ADD_TO_CART";
export const SET_INVENTORY = "SET_INVENTORY";

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  item,
});

export const setInventory = (inventory) => ({
  type: SET_INVENTORY,
  inventory,
});
