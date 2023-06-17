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
  return <h1 className="text-5xl my-6">{children}</h1>;
};

export const HeroSubTitle: React.FC<HeroElementProps> = ({ children }) => {
  return <h1 className="text-xl mb-12">{children}</h1>;
};
