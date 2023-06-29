import React from "react";
import { Container } from "./Container";
import Link from "next/link";
import { Logo } from "../icons";
import {
  AiOutlineGithub,
  AiOutlineSlack,
  AiOutlineTwitter,
} from "react-icons/ai";

const footerLink = [
  {
    title: "Products",
    links: [
      { title: "Features", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Docs", href: "#" },
      { title: "Linear Method", href: "#" },
      { title: "Download", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Brand", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
      { title: "DPA", href: "#" },
      { title: "Privacy Policy", href: "#" },
      { title: "Terms of service", href: "#" },
      { title: "Report a vulnerability", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "GitHub", href: "#" },
    ],
  },
];

export const Footer = () => (
  <footer className="border-t border-transparent-white py-[5.6rem] mt-12 text-md">
    <Container className="flex flex-col lg:flex-row justify-between">
      <div>
        <div className="flex h-full flex-row lg:flex-col items-center justify-between">
          <Link href="#">
            <Logo className="h-4 text-grey hover:text-offwhite transition-colors" />
          </Link>
          <div className="mt-auto flex space-x-4 text-grey items-center">
            <Link href="#" className="hover:text-offwhite transition-colors">
              <AiOutlineTwitter size={24} />
            </Link>
            <Link href="#" className="hover:text-offwhite transition-colors">
              <AiOutlineGithub size={24} />
            </Link>
            <Link href="#" className="hover:text-offwhite transition-colors">
              <AiOutlineSlack size={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {footerLink.map((column) => (
          <div
            key={column.title}
            className="min-w-[50%] lg:min-w-[18rem] mt-10 lg:mt-0"
          >
            <h3 className="mb-3 font-medium">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li className="[&_a]:last:mb-0" key={link.title}>
                  <Link
                    className="text-grey mb-3 block hover:text-offwhite transition-colors"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </footer>
);
