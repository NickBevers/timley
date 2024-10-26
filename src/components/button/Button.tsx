import React from "react";

export type ButtonVariants = "primary" | "secondary";
export type ButtonSizes = "sm" | "md" | "lg";

const buttonVariants = {
  primary: "bg-main text-white font-semibold hover:bg-main-hover transition-colors",
  secondary: "bg-white text-teal-800 font-semibold",
};

const buttonSizes = {
  sm: "py-1 px-2",
  md: "py-2 px-4 lg:py-2 lg:px-6 3xl:py-3 3xl:px-8",
  lg: "py-3 px-6",
};

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "submit" | "reset" | "button" | undefined;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  type,
  variant = "primary",
  size = "md",
  disabled = false,
}) => {
  return (
    <button className={`rounded-sm ${buttonSizes[size]} ${buttonVariants[variant]}`} onClick={(e) => onClick?.(e)} type={type} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;
