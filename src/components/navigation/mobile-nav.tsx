import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants/nav-links";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="size-8 md:hidden cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="py-32">
        <nav className="flex flex-col items-center gap-4">
          {navLinks.map((link, index) => {
            const { label, href, icon: Icon } = link;
            return (
              <SheetClose key={index} asChild>
                <Link
                  href={href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }),
                    "w-full justify-start"
                  )}
                >
                  <Icon className="size-5" />
                  <span>{label}</span>
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
