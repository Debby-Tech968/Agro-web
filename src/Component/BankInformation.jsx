import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Btn from "./Btn";
import { NavLink } from "react-router-dom";

const BankInformation = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="min-h-screen bg-[#E0FFE2] flex items-center justify-center px-4 py-8 lg:py-12">
      <Wrapper>
        <div className="w-full max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10 lg:mb-14">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#333333]">
              Register With Olage Limited
            </h1>

            <p className="mt-2 text-base sm:text-lg text-[#333333]">
              Bank Information
            </p>
          </div>

          <form className="space-y-6 lg:space-y-10">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
              <div>
                <label className="block mb-3 text-base lg:text-lg font-medium text-[#333333]">
                  Bank Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your bank name"
                  className="w-full lg:w-112.5 h-12 lg:h-14 px-5 bg-white border border-[#FF8A00] rounded-md outline-none focus:ring-2 focus:ring-[#FF8A00]"
                />
              </div>

              <div>
                <label className="block mb-3 text-base lg:text-lg font-medium text-[#333333]">
                  Bank Account Number
                </label>

                <input
                  type="text"
                  placeholder="Enter your account number"
                  className="w-full lg:w-112.5 h-12 lg:h-14 px-5 bg-white border border-[#FF8A00] rounded-md outline-none focus:ring-2 focus:ring-[#FF8A00]"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
              <div>
                <label className="block mb-3 text-base lg:text-lg font-medium text-[#333333]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full lg:w-112.5 h-12 lg:h-14 px-5 bg-white border border-[#FF8A00] rounded-md outline-none focus:ring-2 focus:ring-[#FF8A00]"
                />
              </div>

              <div>
                <label className="block mb-3 text-base lg:text-lg font-medium text-[#333333]">
                  BVN
                </label>

                <input
                  type="text"
                  placeholder="Enter your BVN"
                  className="w-full lg:w-112.5 h-12 lg:h-14 px-5 bg-white border border-[#FF8A00] rounded-md outline-none focus:ring-2 focus:ring-[#FF8A00]"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 pt-6 lg:pt-10">
              <NavLink to="/register" className="w-full sm:w-52">
                <Btn
                  text="Back"
                  className="w-full h-12 lg:h-14 border border-gray-400 bg-transparent text-[#333333] rounded-md text-base lg:text-lg font-semibold justify-center hover:bg-gray-100"
                />
              </NavLink>

              <Btn
                type="button"
                text="Submit"
                onClick={() => setShowModal(true)}
                className="w-full sm:w-52 h-12 lg:h-14 bg-[#FF7300] text-white rounded-md text-base lg:text-lg font-semibold justify-center hover:bg-orange-600"
              />
            </div>
          </form>
        </div>
      </Wrapper>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4 z-50">
          <div className="bg-white rounded-xl p-6 sm:p-8 w-full max-w-md shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-semibold text-center text-[#333333]">
              Registration Successful
            </h2>

            <p className="text-center text-gray-600 mt-4">
              Your business has been registered successfully.
            </p>

            <div className="mt-8 flex justify-center">
              <NavLink to="/dashboard">
                <Btn
                  text="OK"
                  onClick={() => setShowModal(false)}
                  className="w-40 h-12 bg-[#FF7300] text-white rounded-md font-semibold justify-center"
                />
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BankInformation;
