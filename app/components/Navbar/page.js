"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navbarRef = useRef(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 854) {
      setIsMenuOpen(!isMenuOpen);
      document.body.classList.toggle("menu-open", !isMenuOpen);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("menu-open");
  };

  // Close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Sticky Navbar on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (href) => {
    return pathname === href ? "active" : "";
  };

  return (
    <div ref={navbarRef} className={`navbarMain ${isSticky ? "fixed" : ""}`}>
      <div className="navbarContainer">
        <nav className="navbar">
          <div className="navIcons">
            <div className="menuToggle" onClick={toggleMenu}>
              {!isMenuOpen ? <FaBars className="icon" /> : <FaTimes className="icon" />}
            </div>
            <div className="logo">
              <Link href="/">
                <img src="/image/logo.png" alt="Logo" />
              </Link>
            </div>
            <ul ref={menuRef} className={`navItems ${isMenuOpen ? "active" : ""}`}>
              <li>
                <Link href="/" className={getLinkClass("/")}  onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pages/About" className={getLinkClass("/pages/About")} onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/pages/Product" className={getLinkClass("/pages/Product")} onClick={toggleMenu}>
                  Product
                </Link>
              </li>
              <li>
                <Link href="/pages/Solution" className={getLinkClass("/pages/Solution")} onClick={toggleMenu}>
                  Solution
                </Link>
              </li>
              <li>
                <Link href="/pages/Faq" className={getLinkClass("/pages/Faq")} onClick={toggleMenu}>
                  FAQ
                </Link>
              </li>
              <div className="rightMenu">
            <div className="login">
              <button className="login-btn">Login</button>
            </div>
            <div className="bookDemo">
              <button className="bookDemo-btn">Book a Demo</button>
            </div>
          </div>
            </ul>
          </div>

          {/* Right Menu */}
          <div className="rightMenu">
            <div className="login">
              <button className="login-btn">Login</button>
            </div>
            <div className="bookDemo">
              <button className="bookDemo-btn">Book a Demo</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
