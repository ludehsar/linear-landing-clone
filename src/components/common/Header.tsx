"use client";

import React, { useEffect, useState } from "react";
import { Container } from "./Container";
import { Logo } from "../icons";
import Link from "next/link";
import { Button } from "./Button";
import HamburgerIcon from "../icons/HamburgerIcon";
import classNames from "classnames";

export const Header = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] =
    useState<boolean>(false);

  useEffect(() => {
    document
      .querySelector("html")
      ?.classList.toggle("overflow-hidden", isHamburgerMenuOpen);
  }, [isHamburgerMenuOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setIsHamburgerMenuOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]">
      <Container className="flex items-center h-navigation-height">
        <Link href="/">
          <Logo />
        </Link>
        <div
          className={classNames(
            "transition-[visibility] md:visible",
            isHamburgerMenuOpen ? "visible" : "invisible delay-500"
          )}
        >
          <nav
            className={classNames(
              "transition-opacity duration-500 h-[calc(100vh_-_var(--navigation-height))] md:block fixed top-navigation-height left-0 w-full bg-background overflow-auto md:relative md:top-0 md:h-auto md:w-auto md:bg-transparent md:opacity-100 md:translate-x-0 md:transition-none",
              isHamburgerMenuOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-100vw]"
            )}
          >
            <ul
              className={classNames(
                "flex flex-col md:flex-row md:items-center h-full [&_li]:ml-6 [&_li]:border-b [&_li]:border-dark-grey md:[&_li]:border-none",
                "[&_a]:flex [&_a]:items-center [&_a]:h-navigation-height [&_a]:w-full [&_a]:text-md md:[&_a]:text-sm [&_a:hover]:text-grey [&_a]:translate-y-8 [&_a]:transition-[transform,color] [&_a]:md:transition-colors md:[&_a]:translate-y-0 [&_a]:duration-300 ease-in",
                isHamburgerMenuOpen && "[&_a]:translate-y-0"
              )}
            >
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Method</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Customers</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Changelog</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Integrations</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Company</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="ml-auto h-full flex items-center">
          <Link className="text-sm mr-6" href="#">
            Login
          </Link>
          <Button href="#">Signup</Button>
        </div>
        <button
          className="ml-6 md:hidden"
          onClick={() => setIsHamburgerMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
