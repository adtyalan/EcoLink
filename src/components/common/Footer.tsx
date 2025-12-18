"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  const linkStyles = "text-sm transition duration-150 ease hover:text-white";
  const liStyles = "text-[#A1A1A1] my-1.5";

  return (
    <footer className="px-6 py-24 border-t border-solid pointer-events-auto bg-[#0A0A0A] border-[#242424]">
      <nav className="flex flex-wrap justify-around gap-5 mx-auto max-w-screen-2xl">
        <div className="flex flex-col items-center justify-center w-full max-w-xs gap-5">
          <div className="flex gap-3.5">
            <Link
              href="https://www.instagram.com/sofiezerlina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              title="Instagram Founder Sofie Zerlina"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-instagram-icon lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
            <span className="flex items-center text-sm text-[#A1A1A1]">
              © 2025 EcoLink. All rights reserved.
            </span>
          </div>
        </div>
        <div className="w-full max-w-xs">
          <h2 className="my-3 text-sm font-medium">Koleksi</h2>
          <ul className="grid grid-cols-2">
            <li className={liStyles}>
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/limbah`}
                className={linkStyles}
              >
                Limbah
              </Link>
            </li>
            <li className={liStyles}>
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/makanan`}
                className={linkStyles}
              >
                Makanan
              </Link>
            </li>
            <li className={liStyles}>
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/kerajinan`}
                className={linkStyles}
              >
                Kerajinan
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full max-w-xs">
          <h2 className="my-3 text-sm font-medium">Bantuan</h2>
          <ul className="grid grid-cols-2">
            <li className={liStyles}>
              <Link href="#" className={linkStyles}>
                Hubungi Kami
              </Link>
            </li>
            <li className={liStyles}>
              <Link href="#" className={linkStyles}>
                Pengiriman
              </Link>
            </li>
            <li className={liStyles}>
              <Link href="#" className={linkStyles}>
                Pengembalian & refund
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="w-full max-w-xs">
          <h2 className="my-3 text-sm font-medium">Tentang Marcos</h2>
          <ul className="grid grid-cols-2">
            <li className={liStyles}>
              <Link
                href="https://portfoliomarcos.com/"
                target="_blank"
                className={linkStyles}
              >
                Portofolio
              </Link>
            </li>
            <li className={liStyles}>
              <Link
                href="https://www.linkedin.com/in/marcospenelascamara/"
                target="_blank"
                className={linkStyles}
              >
                LinkedIn
              </Link>
            </li>
            <li className={liStyles}>
              <Link
                href="https://github.com/MarcosCamara01"
                target="_blank"
                className={linkStyles}
              >
                GitHub
              </Link>
            </li>
            <li className={liStyles}>
              <Link
                href="https://medium.com/@marcoscamara"
                target="_blank"
                className={linkStyles}
              >
                Medium
              </Link>
            </li>
          </ul>
        </div> */}
      </nav>
    </footer>
  );
};
