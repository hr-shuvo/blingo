import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Menu} from "lucide-react";
import {Sidebar} from "@/components/sidebar";

export const MobileSidebar = () => {
    return (

        <Sheet>
            <SheetTrigger>
                <Menu className=''></Menu>
            </SheetTrigger>
            <SheetContent className='p-0 z-[100]' side='left'>
                <SheetTitle></SheetTitle>
                <Sidebar/>
            </SheetContent>
        </Sheet>
    )
}