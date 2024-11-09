'use client'

import { courses, userProgress } from "@/db/schema"
import type { InferSelectModel } from "drizzle-orm";
import { Card } from "./card";

type Course = InferSelectModel<typeof courses>;

type Props = {
    courses : Course[];
    activeCourseId?:typeof userProgress.$inferSelect.activeCourseId;
}

export const List =({courses, activeCourseId}:Props) =>{
    return(
        <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
            {
                courses.map((course) =>(
                    <Card 
                        key={course.id}
                        id={course.id}
                        title={course.title}
                        imageSrc={course.imageSrc}
                        onClick={()=>{}}
                        disabled={false}
                        active={course.id===activeCourseId}
                    />
                ))
            }

        </div>
    )
}