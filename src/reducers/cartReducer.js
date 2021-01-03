const initState = {
    items: []
};

export default function (state = initState, action) {
    switch (action.type) {
        case 'CART_ADD_TO_BAG':
            const newItems = [{
                id: action.id,
                name: action.name,
                color: action.color,
                size: action.size,
                image: action.image,
                price: action.price,
                qty: 1
            }, ...state.items]

            return {
                ...state,
                items: newItems
            }

        case 'CART_REMOVE_FROM_BAG':
            return {
                ...state,
                items: [...state.items.filter(item => !(item['id'] === action.id && item['size'] === action.size && item['color'] === action.color))]
            }

        default:
            return state
    }
}