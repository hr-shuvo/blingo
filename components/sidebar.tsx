import React from "react";
import {cn} from "@/lib/utils";

type Props = {
    children: React.ReactNode
};

export const Sidebar = ({className}: Props) => {
    return (
        <div className={cn('flex bg-blue-400 h-full lg:w-[256px] w-[256px] ' +
            'lg:fixed left-0 top-0 px-4 border-r-2 flex-col', className)}>
            Sidebar
        </div>
    )
}