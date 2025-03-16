import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"


const HomePage = () => {
  return (
   <div className="m-4 flex flex-col gap-3">
    <Button className="rounded-md w-[250px]">click me</Button>
    <Calendar className="bg-yellow-500 w-[250px] flex rounded-md "/>
   </div>
  )
}
export default HomePage