//This reducer plays with the amount of a balance.
//It perform two actions : 1)deposit 2)withdraaw
 const reducer=(state=0,action)=>{
    if(action.type==='deposit'){
       return state+action.payload
    }
    else if(action.type === 'withdraw'){
        return state - action.payload
    }
    else{
        return state
    }
}
export default reducer