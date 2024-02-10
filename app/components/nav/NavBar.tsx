import Container from "../Container";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import UserMenu from "./UserMenu";
import CartCount from "./CartCount";

const dancingscript = Dancing_Script ({ subsets: ["latin"], weight: ["400"] });

const NavBar = () => {
  return (
    <div
      className="
    sticky
    top-0
    z-30
    bg-slate-200
    w-full
    shadow-sm
    "
    >
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
            flex
            items-center
            justify-between
            gap-3
            md:gap-0
          "
          >
            <Link href="/" className={`${dancingscript.className} font-bold text-2xl`}>
              Mina~Shop
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-12">
              <CartCount />
              <UserMenu />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
