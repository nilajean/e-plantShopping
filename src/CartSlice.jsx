import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Initialize items as an empty array
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, name, image, cost } = action.payload; // Including id as part of the payload
      const existingItem = state.items.find(item => item.id === id); // Find item by id, not name
      if (existingItem) {
        existingItem.quantity++; // Increment quantity if the item already exists
      } else {
        // Add new item with quantity 1
        state.items.push({ id, name, image, cost, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const { id } = action.payload; // Remove using unique id instead of name
      state.items = state.items.filter(item => item.id !== id);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload; // Update quantity by id
      const itemToUpdate = state.items.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
