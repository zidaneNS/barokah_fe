import SignTitle from "@/app/ui/auth/SignTitle";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col h-full justify-evenly py-8 md:w-1/2">
            <div className="w-full flex justify-center">
                <SignTitle text="Barokah" />
            </div>
            <p className="text-xl">CREATE AN ACCOUNT TO CONTINUE</p>
            <form className="flex flex-col gap-y-4 w-full py-4 px-6 bg-cyan-600 rounded-lg shadow-xl">
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="name">Name :</label>
                    <div className="flex gap-x-2 bg-white w-full items-center rounded-lg px-2">
                        <UserIcon className="w-6" />
                        <input type="text" name="name" id="name" autoComplete="off" placeholder="john Doe" className="text-sm w-full md:text-base py-2 flex-grow-1 outline-none" />
                    </div>
                </div>
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
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="password_confirmation">Confirm password :</label>
                    <div className="flex gap-x-2 bg-white w-full items-center rounded-lg px-2">
                        <LockClosedIcon className="w-6" />
                        <input type="password" name="password_confirmation" id="password_confirmation" autoComplete="off" className="text-sm w-full md:text-base py-2 flex-grow-1 outline-none" />
                    </div>
                </div>
                <button type="submit" className="bg-blue-800 rounded-xl text-white py-2 hover:bg-blue-700 duration-300">Submit</button>
                <p className="text-sm text-white">
                    Already have an account ?
                    <Link href="/auth/login" className="text-blue-950 hover:underline"> Sign in here</Link>
                </p>
            </form>
        </div>
    )
}