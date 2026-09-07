import React, { useState } from "react";
import Layout from "./Layout";
const Customers = () => {
  const [customers, setCustomers] = useState([
    {
      custmoreName: "rohan",
      email: "rohan@gmail.com",
      phone: "+91-7896541230",
      date: "04/11/2026 11:47am",
    },
    {
      custmoreName: "rohan",
      email: "rohan@gmail.com",
      phone: "+91-7896541230",
      date: "04/11/2026 11:47am",
    }, 
    {
      custmoreName: "rohan",
      email: "rohan@gmail.com",
      phone: "+91-7896541230",
      date: "04/11/2026 11:47am",
    }, 
    {
      custmoreName: "rohan",
      email: "rohan@gmail.com",
      phone: "+91-7896541230",
      date: "04/11/2026 11:47am",
    }, 
    {
      custmoreName: "rohan",
      email: "rohan@gmail.com",
      phone: "+91-7896541230",
      date: "04/11/2026 11:47am",
    }, 
    {
      custmoreName: "rohan",
      email: "rohan@gmail.com",
      phone: "+91-7896541230",
      date: "04/11/2026 11:47am",
    }, 
    
  ]);

  return (
    <Layout>
      <div>
        <h1 className="text-xl font-semibold">customers</h1>
        <div className="mt-6">
          <table className="w-full">
            <thead>
              <tr className="bg-rose-600 text-white">
              
                <th className="p-4">Costumer's Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Date</th>
                
              </tr>
            </thead>
            <tbody>
              {customers.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="text-center"
                    style={{
                      background:
                        (index + 1) % 2 == 0 ? "oklch(86.5% 0.012 325.68)": "white"}} >
                   
                    <td className="capitalize p-4 ">
                        <div className="flex gap-3 items-center">
                            <img className="w-10 h-10 rounded-full" src="/images/avt.avif" alt="img" />
                            <div className="flex flex-col justify-center">
                               <samp className="font-semibold">{item.custmoreName}</samp>
                                <small className="text-gray-500">{item.date}</small>
                            </div>
                        </div>
                    </td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.date}</td>
                    
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

export default Customers;
