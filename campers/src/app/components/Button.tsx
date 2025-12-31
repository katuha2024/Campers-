import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  width?: string; 
};

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  width = "w-[166px]", 
}) => {
  const baseStyles =
    "flex items-center justify-center gap-2 rounded-full px-6 py-4 h-[56px] text-base font-medium transition duration-300";

  const variants = {
    primary: "bg-[#e44848] text-white hover:bg-[#d84343]",
    secondary: "bg-transparent border-2 border-[#e44848] text-[#e44848] hover:bg-red-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${width} ${
        disabled ? "opacity-60 cursor-not-allowed" : ""
      }`}
    >
      {label}
    </button>
  );
};
