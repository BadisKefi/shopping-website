import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 py-4 mx-auto font-medium text-blackish">
          <Link className="navbar_link relative" href="#">
            HOME
          </Link>
          <Link className="navbar_link relative" href="#">
            CATEGORIES
          </Link>
          <Link className="navbar_link relative" href="#">
            MEN'S
          </Link>
          <Link className="navbar_link relative" href="#">
            WOMEN'S
          </Link>
          <Link className="navbar_link relative" href="#">
            JEWELRY
          </Link>
          <Link className="navbar_link relative" href="#">
            PARFUME
          </Link>
          <Link className="navbar_link relative" href="#">
            BLOG
          </Link>
          <Link className="navbar_link relative" href="#">
            HOT OFFERS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
