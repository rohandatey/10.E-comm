import React, { useState } from "react";

const Layout = ({children}) => {
  const [menu, setMenu] = useState(280);
  const [accountMenu, setAccountMenu] = useState(false);
  return (
    <div>
      <aside
        className="bg-indigo-600 fixed top-0 left-0 h-full overflow-hidden transition-all"
        style={{ width: menu }}
      ></aside>
      <section
        className="bg-gray-100 h-screen transition-all"
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
                alt="img"/>
              {
                accountMenu && 
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
            }
            </button>
          </div>
        </nav>
        <div className="p-6">
            {children}
        </div>
      </section>
    </div>
  );
};

export default Layout;
