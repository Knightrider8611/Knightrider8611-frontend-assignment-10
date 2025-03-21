'use client'
import Booking from "@/app/booking/page"
import { removeBooking } from "@/redux/features/bookSlice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch, UseDispatch } from "react-redux"
export default function BookingList(){
    const bookings = useAppSelector((state)=>state.bookSlice.bookItems);
    const dispatch = useDispatch<AppDispatch>();
    return(
        <>
        {
        bookings.length > 0? bookings.map((bookingItems)=>(
            <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookingItems.bookDate}>
                <div className="text-xl">{bookingItems.nameLastname}</div>
                <div className="text-xl">{bookingItems.tel}</div>
                <div className="text-xl">{bookingItems.venue}</div>
                <div className="text-xl">{bookingItems.bookDate}</div>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" onClick={()=>dispatch(removeBooking(bookingItems))}>Cancel this booking</button>
            </div>
        )) : <div className="text-xl text-center mt-5">No Venue Booking</div>
        }
        </>
    )
}