
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import MobileSideBar from "./MobileSideBar";

function BreadCrumpsHeader() {
  const pathname = usePathname();
  const paths = pathname === "/" ? [""] : pathname?.split("/");
  return (
    <div className="flex items-center flex-start">
      <MobileSideBar/>
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map((path, index) => (
            <Fragment key={path}>
              <BreadcrumbItem>
                <BreadcrumbLink className="capitalize" href={`/${path}`}>
                  {path === ""  ? "home" : path}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index !== path.length - 1 && <BreadcrumbSeparator />}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
export default BreadCrumpsHeader;
