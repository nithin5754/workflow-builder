"use client";

import { MenuIcon } from "lucide-react";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetTitle,
  SheetHeader,
} from "./ui/sheet";
import { Button, buttonVariants } from "./ui/button";
import { routes } from "@/lib/data";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Link from "next/link";
import { useState } from "react";

function MobileSideBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="block border-separate bg-background md:hidden">
      <nav className="flex container items-center justify-between px-8">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-[400px] sm:w-[540px] space-y-4"
            side="left"
          >
            <SheetHeader>
              <SheetTitle>
                {" "}
                <Logo />
              </SheetTitle>
            </SheetHeader>

            <div className="p-2 mx-4">Credits Score</div>
            <div className="flex flex-col gap-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={` mx-4 ${buttonVariants({
                    variant:
                      pathname === route.href
                        ? "sidebarActiveitem"
                        : "sidebarItem",
                  })}`}
                >
                  <route.icon size={20} />
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
export default MobileSideBar;
