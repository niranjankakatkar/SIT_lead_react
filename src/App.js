import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import User from "./pages/user/User";
import Franchisee from "./pages/franchise/Franchisee";
import Franchisee_Details from "./pages/franchise/Franchisee_Deatils";
import User_Details from "./pages/user/User_Details";
import UserEdit from "./pages/user/UpdateUser";
import Employee from "./pages/employee/Employee";
import Employee_Details from "./pages/employee/Employee_Details";
import Demo from "./Demo";
import Module from "./pages/module/Module";
import Category from "./pages/category/Category";
import Subcategory from "./pages/subcategory/Subcategory";
import ServiceTab from "./pages/service/index";
import Service from "./pages/service/Service";
import ServiceLeadDetails from "./pages/service/ServiceLeadDetails";
import Seller from "./pages/seller/Seller";
import AddSeller from "./pages/seller/AddSeller";
import Merchant from "./pages/merchant/Merchant";
import Advertisement from "./pages/advertisement/Advertisement";
import AddAdvertisement from "./pages/advertisement/AddAdvertisement";
import RequestAdvertisement from "./pages/advertisement/RequestAdvertise";
import Banner from "./pages/banner/Banner";
import AddBanner from "./pages/banner/AddBanner";
import Coupon from "./pages/coupon/Coupon";
import AddCoupon from "./pages/coupon/AddCoupon";
import Cashback from "./pages/cashback/Cashback";
import AddCashback from "./pages/cashback/AddCashback";
import PushNotification from "./pages/pushnotification/PushNotification";
import AddPushNotification from "./pages/pushnotification/AddPushNotification";
import Packages from "./pages/packages/packages";

import Udashboard from "./pages/Udashboard/Dashboard";
import Sdashboard from "./pages/Sdashboard/Dashboard";


//Web pages
import Selleronboarding from "./Selleronboarding";
import Merchantonboarding from "./Merchantonboarding";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        
        <Route path="/Udashboard" element={<Udashboard />}></Route>
        <Route path="/Sdashboard" element={<Sdashboard />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/user-detail/:id" element={<User_Details />}></Route>
        <Route path="/edituser/:id" element={<UserEdit />}></Route>
        <Route path="/franchisee" element={<Franchisee />}></Route>
        <Route
          path="/franchisee_detail/:id"
          element={<Franchisee_Details />}
        ></Route>
        <Route path="/employee" element={<Employee />}></Route>
        <Route
          path="/employee_detail/:id"
          element={<Employee_Details />}
        ></Route>
        <Route path="/demo" element={<Demo />}></Route>
        <Route path="/selleronboarding" element={<Selleronboarding />}></Route>
        <Route
          path="/merchantonboarding"
          element={<Merchantonboarding />}
        ></Route>
        <Route path="/congratulations" element={<Merchantonboarding />}></Route>
        <Route path="/module" element={<Module />}></Route>
        <Route path="/module_detail/:id" element={<Employee_Details />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/subcategory" element={<Subcategory />}></Route>
        <Route path="/servicetab" element={<ServiceTab />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route
          // path="/serviceleaddetails"
          element={<ServiceLeadDetails />}
        ></Route>
        <Route path="/seller" element={<Seller />}></Route>
        <Route path="/addseller" element={<AddSeller />}></Route>
        <Route path="/merchant" element={<Merchant />}></Route>
        <Route path="/advertisement" element={<Advertisement />}></Route>
        <Route path="/addadvertisement" element={<AddAdvertisement />}></Route>
        <Route
          path="/requestadvertisement"
          element={<RequestAdvertisement />}
        ></Route>
        <Route path="/banner" element={<Banner />}></Route>
        <Route path="/addbanner" element={<AddBanner />}></Route>
        <Route path="/coupon" element={<Coupon />}></Route>
        <Route path="/addcoupon" element={<AddCoupon />}></Route>
        <Route path="/cashback" element={<Cashback />}></Route>
        <Route path="/addcashback" element={<AddCashback />}></Route>
        <Route path="/pushnotification" element={<PushNotification />}></Route>
        <Route path="/addpushnotification" element={<AddPushNotification />}></Route>
        <Route path="/packges" element={<Packages />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
