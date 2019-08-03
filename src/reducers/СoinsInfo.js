const initialState = {
    coins: null,
    isLoading: false,
}


export function coinReducer(state = initialState, action) {
    switch (action.type) {
        case 'DATA_COINS_SUCCESS':
            return {...state, coins: action.coins, isLoading: false};
        case 'DATA_COINS_LOADING':
            return {...state, isLoading: true};
        case 'DATA_COINS_UPDATING':
            return {...state, coins: state.coins.map((n) => (n.id in action.coins) ? {...n, priceUsd: action.coins[n.id]} : n)};
        default:
            return state
    }
}