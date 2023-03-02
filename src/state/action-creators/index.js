// All type of action that user want to perform comes under action-creators
export const  depositMoney=(amount)=>{
    return  (dispatch)=>{
        dispatch({
            type:'deposit',
            payload:amount
        })
    }
}

export const withdrawMoney=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'withdraw',
            payload:amount
        })
    }
}