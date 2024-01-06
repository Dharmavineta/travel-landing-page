import Image from "next/image";
import React, { FC } from "react";

type props = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

const Button: FC<props> = ({ title, type, variant, icon, full }) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border cursor-pointer  ${variant} ${
        full && "w-full"
      }`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 cursor-pointer whitespace-nowrap">
        {title}
      </label>
    </button>
  );
};

export default Button;
