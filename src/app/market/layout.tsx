import React from "react";
import Navbar from "../ui/market/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen flex flex-col bg-sky-100">
            <Navbar />
            <div className="h-full w-full px-6 overflow-auto">{children}</div>
        </div>
    )
}