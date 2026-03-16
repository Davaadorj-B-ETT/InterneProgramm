import React from "react";
import { CustomButton } from "@/components/button";
import { UserCard } from "@/components/UserCard";

export default function page() {
    return (
        <div className="p-4">
            WEEK3
            <br />
            <UserCard name="Davaa" age={32} email="Davaa@gmail.com"/>
            <UserCard name="Sally" age={32} email="Sally@gmail.com"/>
            <br />
            <CustomButton text ="login" width={100} height={40}/>
            <br />
            <br />
            <CustomButton text ="register" width={120} height={60} />
        </div>
        
    )
}