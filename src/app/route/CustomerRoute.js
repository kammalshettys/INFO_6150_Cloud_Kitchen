import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';

const CustomerRoute = (props) => {
    const auth = null; 
    return props.user.role==="customer"  && props.user.isSignedIn? <Outlet /> : <Navigate to="/login" />;
}

const mapStateToProps = (state)=>{
    return {
        user:state.user
    }
}
export default connect(mapStateToProps,null)(CustomerRoute)