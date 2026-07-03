import React from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "./Wrapper";
import Btn from "./Btn";
import Handshake from "../assets/Handshake.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";

const Sign = () => {
  return (
    <section className="bg-[#E0FFE2] min-h-screen lg:h-screen lg:overflow-hidden flex items-center justify-center px-4 py-10 sm:px-6 lg:px-10 lg:py-4">
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 md:gap-14 lg:gap-16 items-center">
          {/* Left Side — text + mascot */}
          <div className="hidden lg:flex flex-col items-start justify-center h-full">
            <h1 className="text-3xl xl:text-4xl font-bold text-gray-800 leading-snug mb-6 xl:mb-8">
              Welcome to <br /> Olage Limited
            </h1>

            <img
              src={Handshake}
              alt="Mascot"
              className="w-48 xl:w-60 object-contain self-center"
            />
          </div>

          {/* Right Side — form, big but height-aware */}
          <div className="w-full max-w-xl mx-auto">
            {/* Mobile-only heading */}
            <div className="flex flex-col items-center mb-6 lg:hidden">
              <img
                src={Handshake}
                alt="Mascot"
                className="w-24 sm:w-32 object-contain mb-3"
              />
              <span className="text-sm font-semibold text-gray-600 tracking-wide">
                Olage Limited
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-10 lg:mb-5">
              Login Into Your Account
            </h2>

            <form className="space-y-6 sm:space-y-7 lg:space-y-4">
              {/* Email */}
              <div>
                <label className="block text-base sm:text-lg lg:text-base text-gray-700 mb-2.5 lg:mb-1.5">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-14 sm:h-16 lg:h-12 px-5 sm:px-6 lg:px-5 text-base sm:text-lg lg:text-base bg-white border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-base sm:text-lg lg:text-base text-gray-700 mb-2.5 lg:mb-1.5">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full h-14 sm:h-16 lg:h-12 px-5 sm:px-6 lg:px-5 text-base sm:text-lg lg:text-base bg-white border border-orange-400 rounded-md outline-none focus:ring-2 focus:ring-orange-400"
                />

                <div className="flex justify-end mt-2.5 lg:mt-1.5">
                  <button
                    type="button"
                    className="text-sm sm:text-base text-gray-500 hover:text-orange-500"
                  >
                    Forgot password?
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <Btn
                text="Login Now"
                className="w-full bg-[#FF7300] hover:bg-orange-600 text-white py-4 sm:py-5 lg:py-3.5 justify-center rounded-md text-lg sm:text-xl lg:text-lg font-semibold"
              />
            </form>

            {/* Register */}
            <p className="text-center mt-6 lg:mt-4 text-base sm:text-lg lg:text-base text-gray-600">
              Don't have an account?{" "}
              <NavLink to="/signup" className="text-orange-500 font-medium">
                Sign up
              </NavLink>
            </p>

            {/* Divider */}
            <div className="flex items-center gap-4 my-9 sm:my-10 lg:my-5">
              <div className="flex-1 h-px bg-gray-400/40"></div>
              <span className="text-sm sm:text-base lg:text-sm text-gray-600 whitespace-nowrap">
                Or log in with
              </span>
              <div className="flex-1 h-px bg-gray-400/40"></div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-7">
              <button className="hover:opacity-75 transition-opacity">
                <img src={facebook} alt="facebook" className="w-9 sm:w-10 lg:w-8" />
              </button>

              <button className="hover:opacity-75 transition-opacity">
                <img src={google} alt="google" className="w-9 sm:w-10 lg:w-8" />
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Sign;