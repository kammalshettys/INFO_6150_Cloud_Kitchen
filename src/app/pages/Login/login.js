import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';
import * as action from '../../store/action/index';

function Login(props) {
    const navigate = useNavigate();
    useEffect(()=>{
        props.getUserDetails();
    },[])
    function loginHandler(){
        if(props.user.role=='customer')
         {
            navigate('/customer/home');
         }  
         else if(props.user.role=='consumer')
         {
            navigate('/consumer/home')
         }
         else{
            navigate('/login');
         }
    }
  return (
   <Button onClick={loginHandler}>Click for {props.user.role}</Button>
  )
}

const mapStateToProps = (state)=>{
    return {
        user:state.user
    }
}
const mapDispatcherToProps = (dispatch) =>{
    return {
        getUserDetails: ()=>dispatch(action.getUserDetails())
    }
  }
export default connect(mapStateToProps,mapDispatcherToProps)(Login)