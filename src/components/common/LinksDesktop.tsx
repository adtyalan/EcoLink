"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/libs/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function LinksDesktop() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Koleksi</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="relative flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none overflow-hidden bg-center bg-cover bg-no-repeat bg-[url('/main-image-2.jpg')] 
  before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/70 before:to-transparent"
                    href="/"
                  >
                    <div className="mt-4 mb-1 text-sm font-medium relative z-10">
                      LIHAT SEMUA
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground relative z-10">
                      Temukan produk pilihan untuk setiap kebutuhan Anda.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/limbah" title="LIMBAH">
                Temukan produk limbah yang dapat didaur ulang untuk mendukung
                gaya hidup berkelanjutan. Setiap pembelian membantu mengurangi
                limbah dan menjaga lingkungan kita.
              </ListItem>
              <ListItem href="/makanan" title="MAKANAN">
                Ambil sisa makanan gratis yang masih layak konsumsi. Cukup
                checkout dan nikmati makanan berkualitas tanpa membayar.
                Berkontribusi pada zero waste initiative kami.
              </ListItem>
              <ListItem href="/kerajinan" title="KERAJINAN">
                Koleksi produk kerajinan tangan yang ramah lingkungan.
                Diproduksi dengan bahan berkelanjutan dan mendukung artisan
                lokal untuk masa depan yang lebih hijau.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-[#1F1F1F]",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-[]">
            {title}
          </div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground text-[#A1A1A1]">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
