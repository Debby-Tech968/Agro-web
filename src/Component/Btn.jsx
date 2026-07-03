import React from "react";

const Btn = ({ text, className, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center ${className}`}
    >
      {text}
    </button>
  );
};

export default Btn;
