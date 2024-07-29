// export const ADD_TO_CART = "ADD_TO_CART";
// export const SET_INVENTORY = "SET_INVENTORY";

// export const addToCart = (item) => ({
//   type: ADD_TO_CART,
//   item,
// });

// export const setInventory = (inventory) => ({
//   type: SET_INVENTORY,
//   inventory,
// });
export const ADD_TO_CART = "ADD_TO_CART";
export const SET_INVENTORY = "SET_INVENTORY";
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  item,
});

export const setInventory = (inventory) => ({
  type: SET_INVENTORY,
  inventory,
});

export const updateCartQuantity = (item, quantity) => ({
  type: UPDATE_CART_QUANTITY,
  item,
  quantity,
});
