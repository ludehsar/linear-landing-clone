import React from "react";

export interface HeroProps {
  children: React.ReactNode;
}

export interface HeroElementProps {
  children: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ children }) => {
  return <div className="text-center">{children}</div>;
};

export const HeroTitle: React.FC<HeroElementProps> = ({ children }) => {
  return (
    <h1 className="text-6xl md:text-8xl my-6 text-gradiant">{children}</h1>
  );
};

export const HeroSubTitle: React.FC<HeroElementProps> = ({ children }) => {
  return (
    <p className="md:text-xl text-lg mb-12 text-primary-text font-normal">
      {children}
    </p>
  );
};
