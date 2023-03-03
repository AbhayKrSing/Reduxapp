// All type of action that user want to perform comes under action-creators
export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deposit',   //iska logic nhi ban rha par niche wale ka ban rha hai.
            payload: amount
        })
    }

    // return {
    //     type: 'deposit',           //You can also use this (This is quite easy to understand)
    //     payload: amount     
    // }

}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
    // return {
    //     type: 'withdraw',               //You can also use this (This is quite easy to understand)
    //     payload: amount            
    // }
}