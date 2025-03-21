import getVenues from "@/libs/getVenues";
import Card from "./Card";
import Link from "next/link";

export default async function VenueCatalog({venuesJson}:{venuesJson:Promise<VenueJson>}){
    const venueList = await venuesJson;
    return (
        <>
            <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                venueList.data.map((venueItem:VenueItem)=>(
                    <Link href={`/venue/${venueItem.id}`}
                    className="p-2 sm:p-4 md:p-4 lg:p-8">
                        <Card venueName={venueItem.name} imgSrc={venueItem.picture}/>
                    </Link>
                ))
               }
            </div>
        </>
    );
}