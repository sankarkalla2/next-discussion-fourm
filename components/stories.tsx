import Image from "next/image";
import { stories } from "@/data";

const Stories = () => {
  return (
    <div className="w-full flex flex-col gap-y-6 md:w-[350px] ">
      <h1 className="hidden md:flex px-6 py-2 bg-slate-300 w-max p-2 text-red-500 text-2xl font-bold">
        Stories
      </h1>
      {stories.map((story) => (
        <div className="bg-white space-y-2 border-x shadow-md">
          <div className="relative aspect-video rounded-sm">
            <Image src={story.imgUrl} fill={true} alt="img" />
          </div>
          <div className="p-3">
            <h1 className="font-bold text-xl">{story.title}</h1>
            <p className="text-sm text-muted-foreground line-clamp-5">
              {story.story}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
