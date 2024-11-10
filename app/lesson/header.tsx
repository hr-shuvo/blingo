import { Progress } from "@/components/ui/progress";
import { InfinityIcon, X } from "lucide-react";
import Image from "next/image";

type Props = {
    hearts: number;
    percentage: number;
    hasActiveSubscription: boolean;
}

export const Header = ({
    hearts,
    percentage,
    hasActiveSubscription
}: Props) => {
    return (
        <div className="lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px] max-auto w-full">
            <X onClick={() =>{}}
            className="text-slate-500 hover:opacity-75 transition:cursor-pointer" />

            <Progress value={percentage}/>

            <div className="text-rose-500 flex items-center font-bold">
                <Image 
                src="/heart.svg"
                alt="Heart"
                width={28}
                height={28}
                className="mr-2"
                />
                {
                    hasActiveSubscription ?
                    <InfinityIcon className="h-6 w-6 stroke-[3]" />
                    :hearts
                }

            </div>
        </div>

    )
}