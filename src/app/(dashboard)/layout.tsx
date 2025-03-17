"use client";
import BreadCrumpsHeader from "@/components/BreadCrumpsHeader";
import DesktopSideBar from "@/components/DesktopSideBar";
import { Separator } from "@/components/ui/separator";
import { AlignJustify } from "lucide-react";
import { useState } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const [isSideBarOpen, setSideBarOpen] = useState<boolean>(false);

  const sideBarClose = (data:boolean):void => {
    setSideBarOpen(data);
  };

  return (
    <div className="flex h-screen">
      {isSideBarOpen ? (
        <DesktopSideBar sideBarClose={sideBarClose} />
      ) : (
        <div className="hidden md:block mt-4 ml-2 ">
          <AlignJustify onClick={() => setSideBarOpen(!isSideBarOpen)} />
        </div>
      )}
      <div className="flex flex-col flex-1 min-h-screen">
        <header className="flex items-center justify-between px-6 py-4 h-[50px] container ">
        <BreadCrumpsHeader/>
          
        </header>
        <Separator />
        <div className="overflow-auto">
          <div className="flex-1 container py-4 text-accent-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default layout;
