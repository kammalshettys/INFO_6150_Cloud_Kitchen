import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';

const ConsumerRoute = (props) => {
    return props.user.role==="consumer"  && props.user.isSignedIn? <Outlet /> : <Navigate to="/login" />;
}

const mapStateToProps = (state)=>{
    return {
        user:state.user
    }
}
export default connect(mapStateToProps,null)(ConsumerRoute)