"use client";

import DiscussionForm from "@/components/discussion-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useSidebar } from "@/hooks/use-store";
import { cn } from "@/lib/utils";
import Stories from "@/components/stories";
import { useState } from "react";

export default function Home() {
  const [isTrue, setIsTrue] = useState<boolean>(true);
  const { collapsed } = useSidebar((state) => state);
  return (
    <div className="px-4 lg:px-8 pt-2">
      <div className="md:hidden grid text-white bg-blue-950 grid-cols-2 h-10 mb-2 font-medium text-lg border-x-4 border-slate-900">
        <button
          className={cn("", isTrue && "border-b-4 border-red-500 bg-slate-800")}
          onClick={() => setIsTrue(true)}
        >
          Discussion Fourm
        </button>
        <button
          className={cn("", !isTrue && "border-b-4 border-red-500 bg-slate-800")}
          onClick={() => setIsTrue(false)}
        >
          Stories
        </button>
      </div>
      <div
        className={cn(
          "w-full grid grid-cols-12 gap-x-4 lg:gap-x-8 sm:col-span-12",
          !collapsed && "lg:pl-[225px]"
        )}
      >
        <div
          className={cn(
            "md:col-span-8 col-span-full md:flex",
            !isTrue && "hidden"
          )}
        >
          <DiscussionForm />
        </div>
        <div className={cn("md:flex w-full md:col-span-4 justify-end lg:pr-4 col-span-full", isTrue && "hidden")}>
          <Stories />
        </div>
      </div>
    </div>
  );
}
