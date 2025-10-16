 
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Shop from '../pages/Shop';
import Login from '../pages/Login';
 
import MainLayout from '../layouts/MainLayout';

const AppRoutes = () => {
    return (
         <Routes>
           
            <Route element = {<MainLayout/>}>
                
                <Route path='/' element = {<Home/>} />  
                <Route path='/about' element = {<About/>} />
                <Route path='/shop' element= {<Shop />} />
                <Route path="login" element= {<Login />} />
                       
             </Route>
         </Routes>
    );
};

export default AppRoutes;