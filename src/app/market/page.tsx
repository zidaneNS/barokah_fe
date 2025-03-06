import Image from "next/image";
import { SectionType } from "../lib/definition";
import Link from "next/link";

const className: string[] = [
    "w-32 min-h-32 md:h-64 md:w-full bg-cyan-800 rounded-lg cursor-pointer md:hover:mt-16 duration-300 flex flex-col gap-y-2 md:gap-y-6 items-center py-2",
    "w-32 min-h-32 md:h-64 md:w-full bg-cyan-800 rounded-lg md:mt-6 cursor-pointer md:hover:mt-12 flex flex-col gap-y-2 md:gap-y-6 duration-300 items-center py-2"
]

const sections: SectionType[] = [
    {
        src: "/rumah.png",
        alt: "household icon",
        href: "#",
        className: 0,
        description: "Kebutuhan Rumah"
    },
    {
        src: "/bumbu.png",
        alt: "seasoning icon",
        href: "#",
        className: 1,
        description: "Kebutuhan Dapur"
    },
    {
        src: "/instan.png",
        alt: "instant food icon",
        href: "#",
        className: 0,
        description: "Makanan Instan dan Olahan"
    },
    {
        src: "/pokok.png",
        alt: "primary food icon",
        href: "#",
        className: 1,
        description: "Bahan Pokok"
    },
    {
        src: "/sayur.png",
        alt: "vegetables icon",
        href: "#",
        className: 0,
        description: "Makanan Segar"
    },
    {
        src: "/minum.png",
        alt: "drinks icon",
        href: "#",
        className: 1,
        description: "Minuman"
    },
]

export default function Page() {
    return (
        <main className="flex flex-col gap-y-4 mt-2 h-full w-full">
            <p className="text-slate-700 font-bold">Assalamualaikum (username), mau belanja apa hari ini?</p>
            <div className="w-full flex justify-center">
                <h1 className="text-xl md:text-2xl font-bold px-6 py-2 rounded-lg bg-cyan-800 text-white">Kategori</h1>
            </div>
            <section className="grid grid-cols-2 md:grid-cols-6 h-full gap-2 w-full justify-items-center">
                {sections.map((section: SectionType, id: number) => (
                    <Link 
                        href={section.href}
                        key={id}
                        className={className[section.className]}
                    >
                        <p className="text-white px-2 text-xs md:text-base w-full font-bold text-start">{section.description}</p>
                        <Image
                            src={`/assets/market${section.src}`}
                            width={100}
                            height={100}
                            alt={section.alt}
                            className="w-20 h-20 md:w-32 md:h-32"
                        />
                    </Link>
                ))}
            </section>
        </main>
    )
}