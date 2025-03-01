import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode}) {
    return (
    <div className="min-h-screen bg-white relative">
      <Image 
        src="/market.jpg"
        quality={100}
        alt="blur"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover"
        }}
        className="z-0"
      />
      <div className="fixed top-0 left-0 h-screen w-screen bg-gradient-to-b from-cyan-400/70 to-cyan-600/70 z-10"></div>
      <div className="absolute inset-0 flex flex-col gap-y-4 z-20 justify-center items-center">{children}</div>
    </div>
    )
}