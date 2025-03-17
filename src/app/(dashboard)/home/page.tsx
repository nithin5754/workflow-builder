import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

const HomePage = () => {
  return (
    <div className=" flex flex-col gap-3 m-4 justify-center ">
      <Button className="rounded-md w-[250px]">click me</Button>
      <Calendar className="bg-yellow-500 w-[250px] flex rounded-md " />
      <ModeToggle/>
    </div>
  );
};
export default HomePage;
