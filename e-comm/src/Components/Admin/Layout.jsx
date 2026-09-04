import React, { useState } from "react";
import { Link,useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const [menu, setMenu] = useState(280);
  const [mobileSize, setMobileSize] = useState(0)
  const [accountMenu, setAccountMenu] = useState(false);
  const location = useLocation() //use location for finding location

  // for side menubar
  const menus = [
    {
      label: "DashBoard",
      icon: <i className="ri-dashboard-2-line mr-2"></i>,
      link:"/admin/dashboard"
    },
    
    {
      label: "Products",
      icon: <i className="ri-shopping-cart-2-line mr-2"></i>,
      link:"/admin/products"
    },

    {
      label: "Orders",
      icon: <i className="ri-shape-line mr-2"></i>,
      link:"/admin/orders"
    },
    
    {
      label: "Payments",
      icon: <i className="ri-wallet-2-line mr-2"></i>,
      link:"/admin/payment"
    },
    
    {
      label: "Settings",
      icon: <i className="ri-settings-2-line mr-2"></i>,
      link:"/admin/settings"
    },
    
    {
      label: "Logout",
      icon: <i className="ri-logout-box-line mr-2"></i>,
      link:"/admin/logout"
    },
  ];
  return (
   <>
   {/* this part is use for desktop (md) is use for desktop part  */}
    <div className="md:block hidden">
      <aside
        className="bg-indigo-600 fixed top-0 left-0 h-full overflow-hidden transition-all"
        style={{ width: menu }}>
        <div className="flex flex-col">
          
          {/* here i make a side menubar icon with map-function */}
          {menus.map((item, index) => {
            
            return (
              <>
                <Link key={index}
                  to={item.link} className="text-gray-50 p-4 block hover:bg-rose-700 text-lg" style={{
                    // this part is for set location
                    background:(location.pathname == item.link) ? "red" : "tranparent"
                  }}>
                  {item.icon}
                  {item.label}
                </Link>
              </>
            );})}
        </div>
      </aside>
      <section className="bg-gray-100 h-screen transition-all"
        style={{ marginLeft: menu }}>
        <nav className="bg-white p-6 flex items-center justify-between sticky top-0 left-0">
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setMenu(menu == 280 ? 0 : 280)}
              className="bg-gray-50 hover:bg-indigo-500 hover:text-white h-8 w-8 cursor-pointer rounded-md">
              <i className="ri-menu-2-line text-xl"></i>
            </button>
            <h1 className="text-md font-semibold">ShopCode</h1>
          </div>

          <div>
            <button className="relative">
              <img
                onClick={() => setAccountMenu(!accountMenu)}
                className="w-10 h-10 rounded-full cursor-pointer"
                src="/images/avt.avif"
                alt="img"
              />
              {accountMenu && (
                <div className="absolute top-15 right-0 bg-white p-6 w-[200px] shadow-lg ">
                  <div>
                    <h1 className="text-lg font-semibold">rohan</h1>
                    <p className="text-gray-500">rohan@gmail.com</p>
                    <div className="h-px bg-gray-200 my-4" />
                    <button>
                      <i className="ri-logout-box-line mr-2"></i>Logout
                    </button>
                  </div>
                </div>
              )}
            </button>
          </div>
        </nav>
        <div className="p-6">{children}</div>
      </section>
    </div>

   {/* this part is use for mobile */}
    <div className="md:hidden block">
      <aside
        className="bg-indigo-600 fixed top-0 left-0 h-full overflow-hidden transition-all"
        style={{ width: mobileSize }}>
        <div className="flex flex-col">
          
          {/* here i make a side menubar icon with map-function */}
          {menus.map((item, index) => {
            
            return (
              <>
                <Link key={index}
                  to={item.link} className="text-gray-50 p-4 block hover:bg-rose-700 text-lg" style={{
                    // this part is for set location
                    background:(location.pathname == item.link) ? "red" : "tranparent"
                  }}>
                  {item.icon}
                  {item.label}
                </Link>
              </>
            );})}
        </div>
      </aside>
      <section className="bg-gray-100 h-screen transition-all"
        style={{ marginLeft: mobileSize }}>
        <nav className="bg-white p-6 flex items-center justify-between sticky top-0 left-0">
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setMobileSize(mobileSize == 0 ? 280 : 0)}
              className="bg-gray-50 hover:bg-indigo-500 hover:text-white h-8 w-8 cursor-pointer rounded-md">
              <i className="ri-menu-2-line text-xl"></i>
            </button>
            <h1 className="text-md font-semibold">ShopCode</h1>
          </div>

          <div>
            <button className="relative">
              <img
                onClick={() => setAccountMenu(!accountMenu)}
                className="w-10 h-10 rounded-full cursor-pointer"
                src="/images/avt.avif"
                alt="img"
              />
              {accountMenu && (
                <div className="absolute top-15 right-0 bg-white p-6 w-[200px] shadow-lg ">
                  <div>
                    <h1 className="text-lg font-semibold">rohan</h1>
                    <p className="text-gray-500">rohan@gmail.com</p>
                    <div className="h-px bg-gray-200 my-4" />
                    <button>
                      <i className="ri-logout-box-line mr-2"></i>Logout
                    </button>
                  </div>
                </div>
              )}
            </button>
          </div>
        </nav>
        <div className="p-6">{children}</div>
      </section>
    </div>
   
   
   </>
  );
};

export default Layout;
