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
        default:
            return state
    }
}