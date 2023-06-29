import classNames from "classnames";
import React from "react";

export interface HeroProps {
  children: React.ReactNode;
}

export interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ children }) => {
  return <div className="text-center">{children}</div>;
};

export const HeroTitle: React.FC<HeroElementProps> = ({
  children,
  className,
}) => {
  return (
    <h1
      className={classNames(
        "text-6xl md:text-8xl my-6 text-gradiant",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const HeroSubTitle: React.FC<HeroElementProps> = ({
  children,
  className,
}) => {
  return (
    <p
      className={classNames(
        "md:text-xl text-lg mb-12 text-primary-text font-normal",
        className
      )}
    >
      {children}
    </p>
  );
};
