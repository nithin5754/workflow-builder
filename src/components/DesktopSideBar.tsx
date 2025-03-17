"use client";

import { SidebarCloseIcon } from "lucide-react";
import Logo from "./Logo";
import { routes } from "@/lib/data";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";

function DesktopSideBar({
  sideBarClose,
}: {
  sideBarClose: (data: boolean) => void;
}) {
  const pathname = usePathname();
  return (
    <div className="hidden relative md:block min-w-[280px] max-w-[280px]  h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate">
      <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
        <Logo />
      </div>
      <div className="absolute top-2 left-2">
        <SidebarCloseIcon onClick={() => sideBarClose(false)} />
      </div>
      <div className="p-2">TODO CREDITS</div>
      <div className="flex flex-col p-2">
        {routes.map((route) => (
          <Link key={route.href} href={route.href}       className={buttonVariants({
            variant: pathname === route.href ? "sidebarActiveitem" : "sidebarItem",
          })}>
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default DesktopSideBar;
