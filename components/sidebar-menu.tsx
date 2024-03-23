"use client";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useSidebar } from "@/hooks/use-store";
import { cn } from "@/lib/utils";
const SidebarMenu = () => {
  const { collapsed, onOpen, onClose } = useSidebar((state) => state);
  const Icon = collapsed ? ChevronRight : ChevronLeft;
  return (
    <div
      className={cn(
        "pl-[223px] cursor-pointer fixed inset-y-0 z-50 flex items-center",
          collapsed &&
          "pl-0"
      )}
    >
      <Icon
        className="bg-blue-950 text-white h-20 w-3"
        onClick={collapsed ? onOpen : onClose}
      />
    </div>
  );
};

export default SidebarMenu;
