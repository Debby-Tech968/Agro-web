import React from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "./Wrapper";
import Btn from "./Btn";
import Handshake from "../assets/Handshake.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";

const Signup = () => {
  return (
    <section className="min-h-screen bg-[#E0FFE2] flex items-center py-10">
      <Wrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Section */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold leading-tight text-gray-800 text-center">
              Welcome to
              <br />
              Olage Limited
            </h1>

            <img
              src={Handshake}
              alt="Handshake"
              className="w-108  mt-45 object-contain"
            />
          </div>

          {/* Right Section */}
          <div className="w-full max-w-2xl mx-auto">
            {/* Mobile Image */}
            <div className="lg:hidden flex flex-col items-center mb-8">
              <img src={Handshake} alt="Handshake" className="w-28 mb-4" />

              <h2 className="text-2xl font-bold text-gray-800">
                Olage Limited
              </h2>
            </div>

            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
              Sign Up Now!
            </h2>

            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-lg font-medium text-[#333333] mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full h-16 px-5 rounded-lg border border-[#F57C00] bg-white text-lg outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-lg font-medium text-[#333333] mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-16 px-5 rounded-lg border border-[#F57C00] bg-white text-lg outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-lg font-medium text-[#333333] mb-2">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full h-16 px-5 rounded-lg border border-[#F57C00] bg-white text-lg outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-lg font-medium text-[#333333] mb-2">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full h-16 px-5 rounded-lg border border-[#F57C00] bg-white text-lg outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>

              {/* Button */}
              <Btn
                text="Sign Up"
                className="w-full h-16 bg-[#FF7300] hover:bg-orange-600 text-white text-xl font-semibold rounded-lg justify-center"
              />
            </form>

            {/* Login */}
            <p className="mt-8 text-center text-lg text-[#333333]">
              Dont have an account?{" "}
              <NavLink
                to="/register"
                className="text-[#FF7300] font-semibold hover:underline"
              >
                Sign In
              </NavLink>
            </p>

            {/* Divider */}
            <div className="flex items-center my-10">
              <div className="flex-1 h-px bg-[#F57C00]"></div>

              <span className="mx-4 text-[#333333] text-base whitespace-nowrap">
                Or sign up with
              </span>

              <div className="flex-1 h-px bg-gray-400"></div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-8">
              <button className="w-14 h-14 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:shadow-md transition">
                <img src={facebook} alt="Facebook" className="w-8 h-8" />
              </button>

              <button className="w-14 h-14 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:shadow-md transition">
                <img src={google} alt="Google" className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Signup;
