export const CartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, products: action.payload }
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload }] };

        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
        case "CHANGE_CART_QUANTITY":
            return {
                ...state,
                cart: state.cart.filter((c) => c.id === action.payload.id ? (c.quantity.payload.quantity) : (c.quantity))
            }
    }
}