import Link from "next/link";
import React from "react";
import { cva, VariantProps } from "class-variance-authority";

export interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
}

const buttonClasses = cva("rounded-full inline-flex items-center", {
  variants: {
    variant: {
      primary:
        "bg-primary-gradiant hover:text-shadow hover:box-shadow-primary transition-[shadow,text-shadow]",
      secondary:
        "text-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in",
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-md px-4 h-8",
      large: "text-lg px-6 h-12",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant,
  size,
}) => (
  <Link className={buttonClasses({ variant, size })} href={href}>
    {children}
  </Link>
);
