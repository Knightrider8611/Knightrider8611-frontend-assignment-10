'use client'
import Image from "next/image";
import { useState } from "react";
import styles from "./card.module.css"
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";
export default function Card({venueName,imgSrc,onRating}:{venueName:string,imgSrc:string,onRating?:Function}){
    const [ratingValue,setRatingValue] = useState(0);
    return (
        <InteractiveCard contentName={venueName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc} alt='Content' fill={true} className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[15%] p-[10px] text-center text-xl'>
                {venueName}
            </div>
            {
                onRating?
                <div className="text-center">
                    <Rating id={venueName+" Rating"} name={venueName+" Rating"} data-testid={venueName+" Rating"} size="large"
                    value={ratingValue} onClick={(e)=>{e.stopPropagation();}} onChange={(e,newRatingValue)=>
                    {if(newRatingValue==null){
                        newRatingValue=ratingValue;
                    }
                    setRatingValue(newRatingValue);
                    onRating(venueName,newRatingValue);}}/>
                </div> : null

            }
        </InteractiveCard>
    );
}