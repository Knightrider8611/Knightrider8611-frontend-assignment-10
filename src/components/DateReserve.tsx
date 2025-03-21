'use client'
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { Select,MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { Dayjs } from "dayjs";
export default function DateReserve({onDateChange}:{onDateChange:Function}){
    const [date,setDate] = useState<Dayjs|null>();
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker onChange={(value)=>{setDate(value);onDateChange(value)}}/>
        </LocalizationProvider>
    );
}