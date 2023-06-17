import React from "react";
import { Container } from "./Container";
import { Logo } from "../icons";
import Link from "next/link";
import { Button } from "./Button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]">
      <Container className="flex items-center h-[var(--navigation-height)]">
        <Link href="/">
          <Logo />
        </Link>
        <nav>
          <ul className="flex items-center h-full [&_a]:text-sm [&_a:hover]:text-grey [&_a]:transition-colors [&_li]:ml-6">
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Method</Link>
            </li>
            <li>
              <Link href="#">Customers</Link>
            </li>
            <li>
              <Link href="#">Changelog</Link>
            </li>
            <li>
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
      </Container>
    </header>
  );
};
