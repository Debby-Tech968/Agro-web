import React from "react";
import Wrapper from "./Wrapper";
import Btn from "./Btn";
import { NavLink } from "react-router-dom";

const RegisterBusiness = () => {
  return (
    <section className="min-h-screen bg-[#E0FFE2] flex items-center justify-center py-8 lg:py-12 px-4">
      <Wrapper>
        <div className="w-full max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#333333]">
              Register With Olage Limited
            </h1>

            <p className="mt-2 lg:mt-3 text-base sm:text-lg lg:text-xl text-[#333333]">
              Business Information
            </p>
          </div>

          <form className="space-y-6 lg:space-y-10">
            {/* Business Name */}
            <div>
              <label className="block mb-2 lg:mb-3 text-base lg:text-lg font-medium text-[#333333]">
                Business Name
              </label>

              <input
                type="text"
                placeholder="Enter your business name"
                className="w-full lg:w-225 h-12 lg:h-14 px-4 lg:px-6 bg-white border border-[#FF8A00] rounded-md outline-none focus:ring-2 focus:ring-[#FF8A00]"
              />
            </div>

            {/* Phone + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div>
                <label className="block mb-2 lg:mb-3 text-base lg:text-lg font-medium text-[#333333]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full lg:w-107.5 h-12 lg:h-14 px-4 lg:px-6 bg-white border border-[#FF8A00] rounded-md outline-none focus:ring-2 focus:ring-[#FF8A00]"
                />
              </div>

              <div>
                <label className="block mb-2 lg:mb-3 text-base lg:text-lg font-medium text-[#333333]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full lg:w-107.5 h-12 lg:h-14 px-4 lg:px-6 bg-white border border-[#FF8A00] rounded-md outline-none focus:ring-2 focus:ring-[#FF8A00]"
                />
              </div>
            </div>

            {/* CAC + Office */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div>
                <label className="block mb-2 lg:mb-3 text-base lg:text-lg font-medium text-[#333333]">
                  CAC Registration Number
                </label>

                <input
                  type="text"
                  placeholder="Enter CAC registration number"
                  className="w-full lg:w-107.5 h-12 lg:h-14 px-4 lg:px-6 bg-white border border-[#FF8A00] rounded-md outline-none focus:ring-2 focus:ring-[#FF8A00]"
                />
              </div>

              <div>
                <label className="block mb-2 lg:mb-3 text-base lg:text-lg font-medium text-[#333333]">
                  Office Location
                </label>

                <input
                  type="text"
                  placeholder="Enter office location"
                  className="w-full lg:w-107.5 h-12 lg:h-14 px-4 lg:px-6 bg-white border border-[#FF8A00] rounded-md outline-none focus:ring-2 focus:ring-[#FF8A00]"
                />
              </div>
            </div>

            {/* Button */}
            <div className="pt-4 lg:pt-6 flex justify-center">
              <NavLink to="/bank" className="w-full lg:w-225">
                <Btn
                  text="Continue"
                  className="w-full h-12 lg:h-14 bg-[#FF7300] hover:bg-orange-600 text-white rounded-md text-base lg:text-xl font-semibold justify-center"
                />
              </NavLink>
            </div>
          </form>
        </div>
      </Wrapper>
    </section>
  );
};

export default RegisterBusiness;
