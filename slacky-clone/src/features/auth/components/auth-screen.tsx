"use client";

import { useState } from "react";
import { SignInFlow } from "../types";
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";
import Image from 'next/image'; 
//import { SignInCard } from "./sign-in-card";
//import { SignUpCard } from "./sign-up-card";



export const AuthScreen = () => {
    const [state, setState] = useState<SignInFlow>("signIn")
    return (

        <div className="h-full flex items-center justify-center bg-[#0e440e]">
        

            <div className="md:h-auto md:w-[400px]">
                {state === "signIn" ? <SignInCard  setState= {setState}/> : <SignUpCard setState= {setState} />}


            </div>
            <Image src="/logo2.jpg" width={70} height={70} alt='logo'  className="absolute left-1/2 top-20 transform -translate-x-1/2"/>
        </div>
    );
};