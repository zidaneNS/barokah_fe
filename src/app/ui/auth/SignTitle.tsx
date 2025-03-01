export default function SignTitle({ text } : { text: string }) {
    return (
        /* From Uiverse.io by Deri-Kurniawan */ 
    <h1
    className="relative rounded-full bg-blue-700 px-4 py-2 text-white transition-colors duration-300 ease-linear before:absolute before:right-1/2 before:top-1/2 before:-z-[1] before:h-3/4 before:w-2/3 before:origin-bottom-left before:-translate-y-1/2 before:translate-x-1/2 before:animate-ping before:rounded-full before:bg-blue-500 hover:bg-blue-700 hover:before:bg-blue-700 w-fit text-2xl shadow-lg"
    >
    {text}
    </h1>
    )
}