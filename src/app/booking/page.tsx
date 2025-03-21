'use client'
import DateReserve from "@/components/DateReserve";
import { useState } from "react";
import { useDispatch, UseDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import { MenuItem, Select, TextField } from "@mui/material";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import dayjs, { Dayjs } from "dayjs";

export default function Booking(){
    const [nameLastname,setNameLastname] = useState<string|null>(null);
    const [contactNumber,setContactNumber] = useState<string|null>(null);
    const [selectedVenue,setSelectedVenue] = useState<string|null>(null);
    const [rentingDate,setRentingDate] = useState<Dayjs|null>(null);
    const dispatch = useDispatch<AppDispatch>();
    // const handleVenueChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    //     setSelectedVenue(event.target.value);
    // }
    const makeBooking = ()=>{
        if(nameLastname&&contactNumber&&selectedVenue&&rentingDate){
            const item:BookingItem={
                nameLastname:nameLastname,
                tel:contactNumber,
                venue:selectedVenue,
                bookDate:dayjs(rentingDate).format("YYYY-MM-DD")
            }
            dispatch(addBooking(item));
        }
    }
    return(
        <main>
            <div className="bg-cyan-100 w-[290px] ml-[15px] pb-[15px] rounded-xl">
                <div>
                    <div className="text-lg ml-[15px] mt-[25px] pt-[15px]">Enter your Name-Lastname</div>
                    <TextField className="ml-[15px]" variant="standard"
                    name="Name-Lastname" label="Name-Lastname" onChange={(e)=>{setNameLastname(e.target.value)}}/><br/>
                </div>
                <div>
                    <div className="text-lg ml-[15px] mt-[25px]">Enter your contact number</div>
                    <TextField className="ml-[15px]" variant="standard"
                    name="Contact-Number" label="Contact-Number" onChange={(e)=>{setContactNumber(e.target.value)}}/>
                </div>
                <div>
                    <div className="text-lg ml-[15px] mt-[25px]">Select the venue</div>
                    <Select className="ml-[15px] w-[195px]" variant="standard" id="venue" value={selectedVenue} onChange={(e)=>setSelectedVenue(e.target.value as string)}>
                        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                        <MenuItem value="Spark">Spark Space</MenuItem>
                        <MenuItem value="GrandTable">The Grand Table</MenuItem>
                    </Select>
                </div>
                <div className="mt-[25px] ml-[15px]">
                <div className="text-lg mb-[15px] mt-[25px]">Select the renting date</div>
                    <DateReserve onDateChange={(value:Dayjs)=>{setRentingDate(value)}}/>
                </div>
                <button className="bg-indigo-300 mt-[25px] ml-[15px] w-[120px] py-[5px] hover:bg-red-300 rounded-lg" name="Book Venue" onClick={makeBooking}>Book Venue</button>
            </div>
        </main>
    );
}