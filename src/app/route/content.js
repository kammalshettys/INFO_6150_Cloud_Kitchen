import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home/home';
import About from '../pages/About/about';

import CHome from '../pages/CHome/home';
import CAbout from '../pages/CAbout/about';

import Login from '../pages/Login/login';
import CustomerRoute from './CustomerRoute';
import ConsumerRoute from './ConsumerRoute';


const Content = () => {
  return (

        <Routes>
          <Route exact path='/customer' element={<CustomerRoute/>}>
            <Route exact path='/customer/home' element={<Home/>}/>
            <Route exact path='/customer/about' element={<About/>}/>
          </Route>
          <Route exact path='/consumer' element={<ConsumerRoute/>}>
            <Route exact path='/consumer/home' element={<CHome/>}/>
            <Route exact path='/about' element={<CAbout/>}/>
          </Route>
          <Route exact path='/' element={<Login/>}/>
        </Routes>
        // <Routes>
        //      <Route  path='/login' element={<Login/>}/>
        // </Routes>
    
  );
}


export default Content;
