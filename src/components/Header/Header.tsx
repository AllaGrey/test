"use client";

import Link from "next/link";
import { HeaderLogo } from "./Header.style";

const Header = () => {
  return (
    <header className="flex flex-col items-center gap-4">
      <HeaderLogo>Avatar</HeaderLogo>

      <ul className="flex gap-4">
        <li>
          <Link href="/">Home2222</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>

        <li>
          <Link href="/support">Support</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
