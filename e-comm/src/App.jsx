import React from "react";
import "remixicon/fonts/remixicon.css";
import { Routes, Route } from "react-router-dom";

// for admin part
// import Admin from './Components/Admin/Layout'
import Products from "./Components/Admin/Products";
import Orders from "./Components/Admin/Orders";
import Payment from "./Components/Admin/Payment";
import Setting from "./Components/Admin/Setting";
import Logout from "./Components/Admin/Logout";
import Dashboard from "./Components/Admin/Dashboard";
import Customers from "./Components/Admin/Customers";
import NotFound from "./Components/NotFound";

// for other part
import Home from "./Components/Home";

const App = () => {
  return (
    <Routes>
      {/* for other part */}
      <Route path="/" element={<Home />} />
      
      {/* for admin part */}
      <Route path="/admin">
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="customers" element={<Customers />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="payment" element={<Payment />} />
        <Route path="settings" element={<Setting />} />
        <Route path="lagout" element={<Logout />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
