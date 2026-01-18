// import { Route, Routes } from 'react-router-dom';
// import Home from '../pages/Home';
// import About from '../pages/About';
// import Shop from '../pages/Shop';
// import Login from '../pages/Login';
// import MainLayout from '../layouts/MainLayout';
// import Register from '../pages/Register';
// import Dashboard from '../pages/Dashboard';
// import PrivateRoute from '../components/PrivateRoute';
// import ActivateAccount from '../components/Registration/ActivateAccount';

// const AppRoutes = () => {
//     return (
//          <Routes>

//             <Route element = {<MainLayout/>}>

//                 <Route path='/' element = {<Home/>} />
//                 <Route path='/about' element = {<About/>} />
//                 <Route path='/shop' element= {<Shop />} />
//                 <Route path="/login" element= {<Login />} />
//                 <Route path="/register" element= {<Register />} />
//                 <Route path='activate/:uid/:token' element= {<ActivateAccount />} />

//             </Route>

//             <Route
//                 path="/dashboard"
//                 element= {
//                 <PrivateRoute>
//                 <Dashboard />
//                  </PrivateRoute>
//                  }
//                  />

//          </Routes>
//     );
// };

// export default AppRoutes;

import { Route, Routes } from "react-router";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import ActivateAccount from "../components/Registration/ActivateAccount";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Profile";
import AuthTest from "../pages/AuthTest";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes  */}

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/auth-test" element={<AuthTest />} />
        <Route path="activate/:uid/:token" element={<ActivateAccount />} />
      </Route>
      {/* Private Routes  */}
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
