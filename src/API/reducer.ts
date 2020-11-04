import { PayloadAction } from '@reduxjs/toolkit';
import { StateType, Cart } from "./state";

const reducer = {
    addItem: (state: StateType, action: PayloadAction<Cart>) => {
        state.cart = [action.payload, ...state.cart]
    },
    deleteItem: (state: StateType, action: PayloadAction<Number>) => {
        state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
};

export default reducer;