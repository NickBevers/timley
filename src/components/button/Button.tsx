import React from "react";

export type ButtonVariants = "primary" | "secondary";
export type ButtonSizes = "sm" | "md" | "lg";

const buttonVariants = {
  primary: "bg-teal-600 text-white font-semibold text-lg rounded-sm",
  secondary: "bg-gray-200 text-black",
};

const buttonSizes = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
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
    <button className={`${buttonSizes[size]} ${buttonVariants[variant]}`} onClick={(e) => onClick?.(e)} type={type} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;
