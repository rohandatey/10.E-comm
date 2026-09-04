import React, { useState } from "react";
import Layout from "./Layout";

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      orderId: "#R7896412",
      custmoreName: "rohan",
      email: "rohan@gmail.com",
      phone: "+91-7896541230",
      product: "iphone",
      amount: 70000,
      date: "04/11/2026 11:47am",
      satus: "pending",
    },
  ]);

  return (
    <Layout>
      <div>
        <h1 className="text-xl font-semibold">Orders</h1>
        <div className="mt-6">
          <table className="w-full">
            <thead>
              <tr className="bg-rose-600 text-white">
                <th className="py-4">Order Id</th>
                <th>Costumer's Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Satus</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item, index) => {
                return (
                  <tr key={index} className="bg-white text-center">
                    <td className="py-4">{item.orderId}</td>
                    <td className="capitalize">{item.custmoreName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td className="capitalize">{item.product}</td>
                    <td>₹{item.amount.toLocaleString()}</td>
                    <td>{item.date}</td>
                    <td className="capitalize">{item.satus}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
