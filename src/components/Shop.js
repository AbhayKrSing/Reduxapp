import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from '../state/index'
const Shop = () => {
  const dispatch=useDispatch()
  const action=bindActionCreators(actionCreators,dispatch)   //when this will not use ,then we use actionCreators.<method's name>
  const {withdrawMoney,depositMoney}=action
  return (
    <div className=' container text-center m-5'>
      {/* <button className='btn btn-primary' onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>  when only dispatch hook is used */}
      <button className='btn btn-primary' onClick={()=>{withdrawMoney(100)}}>-</button>

      Update Balance
      {/* <button className='btn btn-primary' onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>   when only dispatch hook is used*/}
      <button className='btn btn-primary' onClick={()=>{depositMoney(100)}}>+</button>

    </div>
  )
}

export default Shop
