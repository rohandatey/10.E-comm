import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const menus = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Products",
      href: "/products",
    },
    {
      label: "Category",
      href: "/category",
    },
    {
      label: "ContectUs",
      href: "/contact-us",
    },
  ];
  return (
    <div>
      {/* navbar start from here */}
      <nav className="shadow-lg bg-slate-50 mt-2 sticky top-0 left-0">
        <div className="w-10/12 mx-auto flex items-center justify-between">
          <img className="w-20 " src="/images/logo.png" alt="logo" />

          <ul className="flex gap-6 items-center ">
            {menus.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.href} className="py-8 block hover:bg-blue-600 w-[100px] text-center hover:text-white">
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <Link className="py-8 block hover:bg-rose-600 w-[100px] text-center hover:text-white " to="/login">Login</Link>

             <Link className="block bg-blue-600 hover:bg-rose-600  px-10 py-3 text-center hover:text-white text-md rounded py-3" to="/signup">SignUp</Link>
          </ul>
        </div>
      </nav>

      {/* for home part i use  children and fix here */}
      <div>
        {children}
      </div>

      {/* footer part start form here */}
      <footer className="bg-orange-600 py-16">
      <div className="w-10/12 mx-auto grid grid-cols-4">

       {/* for links 1  */}
      <div>
         <div>
        <h1 className="text-white font-semibold text-2xl mb-3">Website Links</h1>
         <ul className="space-y-2 text-slate-50">
          {menus.map((item,index)=>(
            <li key={index}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
          <li><Link to="/login">Login</Link></li>
          <li> <Link to="/signup">Signup</Link></li>
         </ul>
     
      </div>
      </div>

       {/* for social media 2  */}
      <div>
        <div>
        <h1 className="text-white font-semibold text-2xl mb-3">Follow us</h1>
          <ul className="space-y-2 text-slate-50">
          <li><Link to="/">Facebook</Link></li>
          <li><Link to="/">instagram</Link></li>
          <li><Link to="/">Twitter</Link></li>
          <li><Link to="/">LinkedIn</Link></li>
          <li><Link to="/">Dribbel</Link></li>
          <li><Link to="/">Pintress</Link></li>
        </ul>
     
      </div>
      </div>
      
      {/* for brad logo 3  */}
      <div className="pr-6">
        <h1 className="text-white font-semibold text-2xl mb-3">Brand Details</h1>
         <p className="text-gray-100 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aspernatur incidunt aut pariatur ipsum unde illum quasi ad, molestias corrupti harum debitis ab sapiente? Corporis?</p>
        <img className="w-20 " src="/images/logo.png" alt="logo"/>
     
      </div>
      
      {/* for form part 4  */}
      <div>
         <div>
        <h1 className="text-white font-semibold text-2xl mb-3">Contact Form</h1>
        <form className="space-y-4">
          <input type="text" name="fullName" className="bg-white w-full rounded p-3" placeholder="Your Name" required/>

          <input type="text" name="email" className="bg-white w-full rounded p-3" placeholder="Enter your email id" required/>

          <textarea required name="message" className="bg-white w-full rounded p-3" placeholder="Message" rows={3}/>
          <button className="px-6 py-2 bg-black text-white rounded-md mt-2 cursor-pointer">Submit</button>
        </form>
      </div>
      </div>

    </div>
      </footer>
    </div>
  );
};

export default Layout;
