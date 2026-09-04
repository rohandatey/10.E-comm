import React from "react";
import "remixicon/fonts/remixicon.css";
import { Routes, Route } from "react-router-dom";

// for admin part
// import Admin from './Components/Admin/Layout'
import Products from "./Components/Admin/Products";
import Orders from "./Components/Admin/Orders";
import NotFound from "./Components/NotFound";

const App = () => {
  return (
    <Routes>
      {/* for admin part */}
      <Route path="/admin">
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
