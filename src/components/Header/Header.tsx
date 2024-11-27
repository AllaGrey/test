import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold">Avatar</h1>
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
      </ul>
    </header>
  );
};

export default Header;
