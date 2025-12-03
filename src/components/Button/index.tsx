import { NavLink } from "react-router";

interface ButtonProps {
  title: string;
  color?: "dark" | "light";
  type?: "button" | "submit" | "reset";
  href?: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  title,
  color = "dark",
  type = "button",
  href = "",
  className = "",
  onClick,
}: ButtonProps) => {
  const darkColor =
    "bg-gray-800 text-white hover:bg-gray-900 transition-all ease-in-out duration-200";
  const lightColor =
    "bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all ease-in-out duration-200";
  const defaultStyle = "font-semibold cursor-pointer text-lg rounded-lg";

  if (href) {
    return (
      <NavLink
        to={href}
        className={`${defaultStyle} ${
          color === "dark" ? darkColor : lightColor
        } ${className}`}
      >
        {title}
      </NavLink>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${defaultStyle} ${
        color === "dark" ? darkColor : lightColor
      } ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
