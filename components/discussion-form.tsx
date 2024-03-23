import { discussionForms } from "@/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, MessageCircle, Share, View } from "lucide-react";
import { Badge } from "./ui/badge";
import Image from "next/image";

const DiscussionForm = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <h1 className="hidden md:flex bg-slate-300 w-max px-4 py-2 text-red-500 text-2xl font-bold">Discussion Forum</h1>
      {discussionForms.map((form) => (
        <div className="shadow-md rounded-sm p-4 grid grid-cols-12 gap-x-2">
          <div className="col-span-1 w-full flex justify-end items-start">
            <Image
              src={form.imgUrl}
              width={40}
              height={40}
              alt="profile"
              className="rounded-full"
            />
          </div>
          <div className="col-span-9 space-y-2">
            <div className="flex items-center gap-x-2">
              <h2 className="font-bold">{form.name}</h2>
              <Badge variant="darkBlue" className="text-xs">
                Sector {form.sector}
              </Badge>
            </div>
            <p className="text-sm">{form.content}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-x-1">
                <Heart className="h-4 w-4 cursor-pointer" /> {form.likes}
              </span>
              <span className="flex items-center gap-x-1">
                <View className="w-4 h-4 cursor-pointer" /> {form.views}
              </span>
              <span className="flex items-center gap-x-1">
                <MessageCircle className="h-4 w-4 cursor-pointer" />{" "}
                {form.comments}
              </span>
              <span className="flex items-center gap-x-1">
                <Share className="h-4 w-4 cursor-pointer" /> Share
              </span>
            </div>
          </div>
          <div className="col-span-2 truncate text-sm text-blue-500 font-medium">2 min ago</div>
        </div>
      ))}
    </div>
  );
};

export default DiscussionForm;
