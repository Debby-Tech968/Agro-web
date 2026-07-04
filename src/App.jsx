import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sign from "./Component/Sign";
import Signup from "./Component/Signup";
import RegisterBusiness from "./Component/RegisterBusiness";
import BankInformation from "./Component/BankInformation";
import Dashboard from "./Component/Dashboard";
import Product from "./Component/Product";
import Order from "./Component/Order";
import Earning from "./Component/Earning";
import Review from "./Component/Review";
import Notification from "./Component/Notification";
import Subcription from "./Component/Subcription";
import Setting from "./Component/Setting";
import Logout from "./Component/Logout";
import Sidebar from "./Component/Sidebar";
// import Navbar from "./Component/Navbar";

const authRoutes = ["/", "/signup", "/register", "/bank"];

const App = () => {
  const location = useLocation();
  const isAuthRoute = authRoutes.includes(location.pathname);

  return (
    <div>
      {!isAuthRoute && <Sidebar />}
      {/* {!isAuthRoute && <Navbar />} */}
      <div
        className={!isAuthRoute ? " pt-20 xl:pt-1 px-5 sm:px-8" : ""}
      >
        <Routes>
          <Route path="/" element={<Sign />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<RegisterBusiness />} />
          <Route path="/bank" element={<BankInformation />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
          <Route path="/earning" element={<Earning />} />
          <Route path="/review" element={<Review />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/subcription" element={<Subcription />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
