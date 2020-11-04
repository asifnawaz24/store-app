import { createSlice, configureStore } from "@reduxjs/toolkit";
import { initialState } from "./state";
import reducer from "./reducer";

export const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: reducer
});

export const store = configureStore({
    reducer: storeSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export const { addItem, deleteItem } = storeSlice.actions;
export const storeState = (state: RootState) => store.getState;
export default storeSlice.reducer;
