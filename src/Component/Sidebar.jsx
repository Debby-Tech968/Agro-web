import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ellipse from "../assets/Ellipse.png";
import notification from "../assets/notification.png";
import order from "../assets/order.png";
import product from "../assets/product.png";
import review from "../assets/review.png";
import search from "../assets/search.png";
import setting from "../assets/setting.png";
import subcription from "../assets/subscription.png";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-5 py-2.5 rounded-full text-[15px] transition-colors ${
      isActive
        ? "bg-white text-[#1F5C2E] font-medium"
        : "text-white hover:bg-white/10"
    }`;

  const navLinks = [
    { to: "/dashboard", icon: search, label: "Dashboard" }, // TODO: swap for real dashboard icon
    { to: "/product", icon: product, label: "Product" },
    { to: "/orders", icon: order, label: "Orders" },
    { to: "/earnings", icon: search, label: "Earnings" }, // TODO: swap for real earnings icon
    { to: "/reviews", icon: review, label: "Reviews" },
    { to: "/notifications", icon: notification, label: "Notifications" },
    { to: "/subscriptions", icon: subcription, label: "Subscriptions" },
    { to: "/settings", icon: setting, label: "Settings" },
  ];

  return (
    <>
      {/* Mobile / tablet top bar */}
      <div className="flex xl:hidden items-center justify-start px-5 py-4 fixed top-0 left-0 right-0 z-30">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex flex-col justify-center gap-1.5 p-2"
        >
          <span className="block w-6 h-0.5 bg-[#1F5C2E] rounded"></span>
          <span className="block w-6 h-0.5 bg-[#1F5C2E] rounded"></span>
          <span className="block w-6 h-0.5 bg-[#1F5C2E] rounded"></span>
        </button>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 xl:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`bg-[#1F5C2E] h-auto w-72 sm:w-80 p-6 sm:p-8 flex flex-col fixed top-0 left-0 z-50 overflow-hidden transform transition-transform duration-300 ease-in-out
        xl:fixed xl:translate-x-0 xl:flex xl:w-80 xl:h-screen xl:py-8 xl:px-6
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-center gap-2 shrink-0 mb-2 relative">
          {/* <img
            src={ellipse}
            alt="Olage logo"
            className="w-9 h-9 rounded-full object-cover"
          /> */}
          <h1 className="text-[28px] text-white font-extrabold">
            Olage<span className="align-super text-xs">®</span>
          </h1>

          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="xl:hidden text-white text-3xl leading-none absolute right-0"
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col items-center gap-2 mb-8 shrink-0">
          {/* TODO: replace with real avatar image once available */}
          <img
            src={ellipse}
            alt="User avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
          <p className="text-white text-[16px] font-medium">Hello Ope</p>
        </div>

        <div className="flex flex-col gap-1 xl:flex-1">
          {navLinks.map(({ to, icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              <img src={icon} alt={label} className="w-5 h-5 shrink-0" />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>

        <div className="mt-auto xl:mt-0 shrink-0">
          <NavLink
            to="/logout"
            className="flex items-center gap-3 px-5 py-2.5 rounded-full text-[15px] text-white hover:bg-white/10 transition-colors"
            onClick={() => setOpen(false)}
          >
            <img src={search} alt="Logout" className="w-5 h-5 shrink-0" />{" "}
            {/* TODO: swap for real logout icon */}
            <span>Logout</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
