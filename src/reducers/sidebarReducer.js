const initState = {
    sideBarOpen: false
};

export default function (state = initState, action) {
    switch (action.type) {
        case 'NAVBAR_TOGGLE_SIDEBAR':
            return {
                ...state,
                sideBarOpen: !state.sideBarOpen
            }
        default:
            return state
    }
}