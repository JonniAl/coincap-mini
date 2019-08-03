export function loadDataCoinsSuccess(coins) {
    return {
        type: 'DATA_COINS_SUCCESS',
        coins,
    }
}

export function loadDataCoinsStart() {
    return {
        type: 'DATA_COINS_LOADING',
    }
}

export function updateDataCoins(coins) {
    return {
        type: 'DATA_COINS_UPDATING',
        coins
    }
}


export function loadDataCoins(url) {
    return (dispatch) => {
        dispatch(loadDataCoinsStart());
        fetch(url, {
            headers: {
                'Accept-Encoding': 'gzip'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(response => dispatch(loadDataCoinsSuccess(response.data)))
    }
}