import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import {BrowserRouter,Routes,Route, json} from 'react-router-dom'
import Home from './pages/Home/home'
import CHome from './pages/CHome/home'
import About from './pages/About/about'
import CAbout from './pages/CAbout/about'
import CustomerRoute from './route/CustomerRoute';
import ConsumerRoute from './route/ConsumerRoute';
import Login from './pages/Login/login';

function App(props) {

  return (
    <BrowserRouter>
    <Routes>
          <Route exact path='/customer' element={<CustomerRoute/>}>
            <Route exact path='/customer/home' element={<Home/>}/>
            <Route exact path='/customer/about' element={<About/>}/>
          </Route>
          <Route exact path='/consumer' element={<ConsumerRoute/>}>
            <Route exact path='/consumer/home' element={<CHome/>}/>
            <Route exact path='/consumer/about' element={<CAbout/>}/>
          </Route>
          <Route exact path='/login' element={<Login/>}/>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
