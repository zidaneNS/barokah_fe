import { moonDance } from "@/app/fonts";
import SignTitle from "@/app/ui/auth/SignTitle";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col h-full justify-evenly py-8 md:w-1/2">
            <div className="w-full flex justify-center">
                <SignTitle text="Barokah" />
            </div>
            <div className="flex flex-col gap-y-4 w-full">
                <h2 className={`text-6xl ${moonDance.className} font-bold`}>Welcome back</h2>
                <p className="text-xl md:text-2xl">HELLO THERE LOGIN TO CONTINUE</p>
            </div>
            <form className="flex flex-col gap-y-4 w-full py-4 px-6 bg-cyan-600 rounded-lg shadow-xl">
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="email">Email :</label>
                    <div className="flex gap-x-2 bg-white w-full items-center rounded-lg px-2">
                        <UserIcon className="w-6" />
                        <input type="email" name="email" id="email" autoComplete="off" placeholder="john@email.com" className="text-sm w-full md:text-base py-2 flex-grow-1 outline-none" />
                    </div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="password">password :</label>
                    <div className="flex gap-x-2 bg-white w-full items-center rounded-lg px-2">
                        <LockClosedIcon className="w-6" />
                        <input type="password" name="password" id="password" autoComplete="off" className="text-sm w-full md:text-base py-2 flex-grow-1 outline-none" />
                    </div>
                </div>
                <button type="submit" className="bg-blue-800 rounded-xl text-white py-2 hover:bg-blue-700 duration-300">Submit</button>
                <Link href="/market" type="submit" className="bg-slate-800 text-center rounded-xl text-white py-2 hover:bg-slate-700 duration-300">Continue as guest</Link>
                <p className="text-sm text-white">
                    not have any account ?
                    <Link href="/auth/register" className="text-blue-950 hover:underline"> Sign up here</Link>
                </p>
            </form>
        </div>
    )
}