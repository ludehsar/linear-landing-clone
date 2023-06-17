import classNames from "classnames";
import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames("max-w-[120rem] mx-auto", className)}>
      {children}
    </div>
  );
};
