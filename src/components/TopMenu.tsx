import Image from "next/image";
import styles from "./topmenu.module.css";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { Link } from "@mui/material";
export default async function TopMenu(){
    const session = await getServerSession(authOptions);
    return (
        <div className="h-[50px] bg-white fixed top-0 left-0 right-0 z-30 border-t border-b border-gray-300 flex flex-row justify-between items-center">
             <div className="flex flex-row space-x-1">
                {
                    session?<TopMenuItem title="Sign-Out" pageRef="/api/auth/signout"/>:<TopMenuItem title="Sign-In" pageRef="/api/auth/signin"/>
                }
                <TopMenuItem title="My Booking" pageRef="/mybooking"/>
            </div>
            <div className="flex flex-row items-center">
                <TopMenuItem title="Booking" pageRef="/booking"/>
                <Image src={'/img/logo.png'} className={styles.logoimg} alt='logo' width={40} height={40} />
            </div>
        </div>
    );
}
