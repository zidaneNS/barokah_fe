import { ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full py-2 flex justify-center gap-x-4 md:gap-x-8 text-white bg-cyan-700 h-fit text-lg rounded-b-full shadow-lg">
            <Link href="/market/cart" className="py-2 relative px-3 hover:bg-white/20 duration-300 rounded-lg flex gap-x-2 items-center">
                <ShoppingCartIcon className="w-10" />
                <span className="absolute rounded-full bg-red-500 top-0 left-0">99</span>
                Cart
            </Link>
            <Link href="/dashboard" className="py-2 px-3 hover:bg-white/20 duration-300 rounded-lg flex gap-x-2 items-center">
                <UserCircleIcon className="w-10" />
                username
            </Link>
        </div>
    )
}