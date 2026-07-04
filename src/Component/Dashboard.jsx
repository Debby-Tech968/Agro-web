import React from "react";
import Wrapper from "./Wrapper";
import searchicon from "../assets/search2.png";
import notificationicon from "../assets/notificationbell.png";
import phone from "../assets/phone2.png";
import email from "../assets/email2.png";
import image from "../assets/Ellipse.png";
import cart from "../assets/cartlarge.png";
import SalesOverview from "./Salesoverview";
import Notifications from "./Notifications";
// import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <Wrapper>
      <div className="min-h-screen xl:ml-80 px-4 md:px-6 xl:px-0">
        <div className="bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-3 border-b border-gray-200">
          <div className="flex items-center border border-[#666666] w-full md:max-w-100 h-12 gap-2 px-3 rounded-md">
            <img src={searchicon} alt="Search" className="w-5 h-5 shrink-0" />
            <input
              type="text"
              placeholder="Product Search"
              className="flex-1 outline-none text-sm text-gray-700 placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center justify-between md:justify-end gap-6 md:gap-12 w-full md:w-auto shrink-0">
            <div className="flex items-center gap-4">
              <img
                src={notificationicon}
                alt="Notifications"
                className="w-6 h-6"
              />
              <img src={email} alt="Email" className="w-6 h-6" />
              <img src={phone} alt="Phone" className="w-6 h-6" />
            </div>

            <div className="flex items-center gap-3">
              <img
                src={image}
                alt="Ope John"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="leading-tight">
                <h2 className="text-sm font-semibold text-gray-800">
                  Ope John
                </h2>
                <h2 className="text-xs text-gray-500">opejohn@gmail.com</h2>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-[22px] sm:text-[26px] xl:text-[28px] mt-6 sm:mt-10 font-bold text-[#333333]">
            Dashboard
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-6">
            <div className="bg-[#FFFFFF] rounded-lg p-6 mt-6 flex flex-col gap-4 shadow-md w-full h-45">
              <h3 className="text-[#666666] text-[24px] ">Total Products</h3>
              <div className="flex items-center justify-between">
                <h3 className="text-[35px] font-bold  text-[#666666]">25</h3>
                <img
                  src={cart}
                  alt="Cart"
                  className="bg-[#DDFFFB] rounded-full p-2"
                />
              </div>
              <p className="text-[14px] text-[#666666]">
                Number of products currently listed
              </p>
            </div>

            <div className="bg-[#FFFFFF] rounded-lg p-6 mt-6 flex flex-col gap-4 shadow-md w-full h-45">
              <h3 className="text-[#666666] text-[24px] ">Total Products</h3>
              <div className="flex items-center justify-between">
                <h3 className="text-[35px] font-bold  text-[#666666]">25</h3>
                <img
                  src={cart}
                  alt="Cart"
                  className="bg-[#DDFFFB] rounded-full p-2"
                />
              </div>
              <p className="text-[14px] text-[#666666]">
                Number of products currently listed
              </p>
            </div>

            <div className="bg-[#FFFFFF] rounded-lg p-6 mt-6 flex flex-col gap-4 shadow-md w-full h-45">
              <h3 className="text-[#666666] text-[24px] ">Total Products</h3>
              <div className="flex items-center justify-between">
                <h3 className="text-[35px] font-bold  text-[#666666]">25</h3>
                <img
                  src={cart}
                  alt="Cart"
                  className="bg-[#DDFFFB] rounded-full p-2"
                />
              </div>
              <p className="text-[14px] text-[#666666]">
                Number of products currently listed
              </p>
            </div>

            <div className="bg-[#FFFFFF] rounded-lg p-6 mt-6 flex flex-col gap-4 shadow-md w-full h-45">
              <h3 className="text-[#666666] text-[24px] ">Total Products</h3>
              <div className="flex items-center justify-between">
                <h3 className="text-[35px] font-bold  text-[#666666]">25</h3>
                <img
                  src={cart}
                  alt="Cart"
                  className="bg-[#DDFFFB] rounded-full p-2"
                />
              </div>
              <p className="text-[14px] text-[#666666]">
                Number of products currently listed
              </p>
            </div>

            <div className="bg-[#FFFFFF] rounded-lg p-6 mt-6 flex flex-col gap-4 shadow-md w-full h-45">
              <h3 className="text-[#666666] text-[24px] ">Total Products</h3>
              <div className="flex items-center justify-between">
                <h3 className="text-[35px] font-bold  text-[#666666]">25</h3>
                <img
                  src={cart}
                  alt="Cart"
                  className="bg-[#DDFFFB] rounded-full p-2"
                />
              </div>
              <p className="text-[14px] text-[#666666]">
                Number of products currently listed
              </p>
            </div>

            <div className="bg-[#FFFFFF] rounded-lg p-6 mt-6 flex flex-col gap-4 shadow-md w-full h-45">
              <h3 className="text-[#666666] text-[24px] ">Total Products</h3>
              <div className="flex items-center justify-between">
                <h3 className="text-[35px] font-bold  text-[#666666]">25</h3>
                <img
                  src={cart}
                  alt="Cart"
                  className="bg-[#DDFFFB] rounded-full p-2"
                />
              </div>
              <p className="text-[14px] text-[#666666]">
                Number of products currently listed
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mt-6 mb-6">
          <div className="w-full lg:flex-1">
            <SalesOverview />
          </div>
          <div className="w-full lg:flex-1">
            <Notifications />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
