'use client'
import Link from "next/link";
import Card from "./Card";
import { useReducer } from "react";
export default function CardPanel(){
    const reducerRating = (venueList:Map<string,number>,action:{type:string,venueName:string,rating?:number}) => {
        switch(action.type){
            case 'add':{
                if(action.rating!==undefined){
                    venueList.set(action.venueName,action.rating);
                }
                const newMap = new Map(venueList);
                return newMap
            }
            case 'remove':{
                venueList.delete(action.venueName);
                const newMap = new Map(venueList);
                return newMap
            }
            default: return venueList;
        }
    }
    const mockVenueRepo = [
        {vid:"001",name:"The Bloom Pavilion",image:"/img/bloom.jpg"},
        {vid:"002",name:"Spark Space",image:"/img/sparkspace.jpg"},
        {vid:"003",name:"The Grand Table",image:"/img/grandtable.jpg"}
    ]
    let defaultList = new Map<string,number>();
    for(let i = 0 ; i < mockVenueRepo.length;i++){
        defaultList.set(mockVenueRepo[i].name,0);
    }
    const [venueList,dispatchRating] = useReducer(reducerRating,defaultList);
    return (
        <div>
            <div className="flex justify-around flex-wrap">
                {mockVenueRepo.map((venue)=>(
                    <Link href={`/venue/${venue.vid}`}>
                        <Card venueName={venue.name} imgSrc={venue.image} onRating={(venue:string,rate:number)=>dispatchRating({type:'add',venueName:venue,rating:rate})}/>
                    </Link>
                ))}
            </div>
            <div className="text-xl mt-[20px]">
                Venue List with Ratings : {venueList.size}
            </div>
            {Array.from(venueList).map(([venue,rate])=><div data-testid={venue}
            onClick={(e)=>dispatchRating({type:'remove',venueName:venue})}>
                {venue} : {rate}
            </div>)}
        </div>
    );
}