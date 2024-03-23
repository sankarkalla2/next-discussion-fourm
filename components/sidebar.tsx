"use client";
import { useSidebar } from "@/hooks/use-store";
import { cn } from "@/lib/utils";
import { Bell, User } from "lucide-react";
import React from "react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { sidebarRoutes } from "@/data";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const { collapsed } = useSidebar((state) => state);
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "h-full border-r fixed z-50 w-56 text-white flex flex-col overflow-y-auto bg-blue-950 shadow-sm",
        collapsed && "hidden"
      )}
    >
      <div className="px-6 pt-4">
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-x-2 text-sm">
            <User />
            Hello, User
          </div>
          <Bell />
        </div>
      </div>
      <Separator />
      <div className="pt-4">
        {sidebarRoutes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              "flex items-center p-3 pl-6 gap-x-1",
              pathname === route.href && "bg-slate-900 font-medium"
            )}
          >
            { route.icon ? <route.icon className="h-5 w-5" />: <span className="h-5 w-5"></span> }
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
