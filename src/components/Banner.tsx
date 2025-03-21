'use client'
import Image from "next/image";
import styles from "./banner.module.css"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";
export default function Banner(){
    const router = useRouter();
    const bgList = ["/img/cover.jpg","/img/cover2.jpg","/img/cover3.jpg","/img/cover4.jpg"]
    const [index,setIndex] = useState(0);
    const {data:session} = useSession();
    return (
        <div className={styles.banner}>
            <Image src={bgList[index]} alt='cover' fill={true} priority objectFit='cover' onClick={()=>{setIndex((index+1)%4)}}/>
            <div className={styles.bannerText}>
            <h1 className="text-4xl">where every event finds its venue</h1>
            <h3 className="text-2xl">If you love a perfect party place, we are the one you are looking for.</h3>
            </div>
            {
                session? <div className="z-30 absolute top-5 right-5 font-semibold text-cyan-500
                text-xl bg-white p-3 rounded-lg border border-cyan-600 hover:bg-cyan-300 hover:text-black">
                Welcome {session.user?.name}</div> : null
            }
            <button className='bg-white text-cyan-600 border border-cyan-600
            font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
            hover:bg-cyan-600 hover:text-white hover:border-transparent'
            onClick={(e)=>{e.stopPropagation();router.push('/venue')}}>
                Select Venue
            </button>
        </div>
    );
}