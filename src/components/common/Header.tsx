"use client";

import React, { useState } from "react";
import { Container } from "./Container";
import { Logo } from "../icons";
import Link from "next/link";
import { Button } from "./Button";
import HamburgerIcon from "../icons/HamburgerIcon";
import classNames from "classnames";

export const Header = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] =
    useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]">
      <Container className="flex items-center h-navigation-height">
        <Link href="/">
          <Logo />
        </Link>
        <nav
          className={classNames(
            "h-[calc(100vh_-_var(--navigation-height))] md:block fixed top-navigation-height left-0 w-full bg-background overflow-auto md:relative md:top-0 md:h-auto md:w-auto md:bg-transparent",
            isHamburgerMenuOpen ? "" : "hidden"
          )}
        >
          <ul
            className={classNames(
              "flex flex-col md:flex-row md:items-center h-full [&_li]:ml-6 [&_li]:border-b [&_li]:border-dark-grey md:[&_li]:border-none",
              "[&_a]:flex [&_a]:items-center [&_a]:h-navigation-height [&_a]:w-full [&_a]:text-md md:[&_a]:text-sm [&_a:hover]:text-grey [&_a]:transition-colors"
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
