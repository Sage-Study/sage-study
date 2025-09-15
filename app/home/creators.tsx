import { BookCopy, Brain, Github, Instagram, Linkedin, Users } from "lucide-react";

export function Creators() {
    return (
        <main id="creators" className="flex items-center justify-center pt-16 pb-4 bg-[#FFF6EA] text-black">
            <div className="flex-1 flex flex-col items-center gap-7 min-h-0">
                <div className="flex min-w-3xl flex-col items-center gap-4 bg-white px-7 py-5 rounded-lg shadow-lg">
                    <div className="flex flex-row items-center gap-8 relative">
                        <Users size={64} color="#8DB1AB" />
                        <h1 className="text-gray-900 font-semibold text-4xl relative z-10">Meet the Creators</h1>
                    </div>
                    <h3 className="text-xl max-w-2xl text-center text-gray-800">Made for students... by students! Learn who we are:</h3>
                </div>

                <div className="flex flex-row justify-center w-full mt-12 gap-5">
                    <div className="flex flex-row items-start gap-5">
                        <img className="w-50 h-50 rounded-[200px] shadow-lg" src="./images/mason.jpg" />
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-4xl font-semibold">Mason M</h1>
                            <h1 className="text-xl max-w-xl">I am a senior in high school. I programmed the actual app using react native and made this website (also in react)! I plan on going into mathematics and physics but I also have a special passion for computer science and ai! </h1>
                        </div>
                    </div>

                    <div className="flex flex-col h-full justify-between gap-3">
                        <button onClick={() => window.open('https://github.com/NimbleValley', '_blank')} className="cursor-pointer rounded-lg p-2 hover:bg-[#F2AE6F] transition duration-350">
                            <Github size={42} />
                        </button>
                        <button onClick={() => window.open('https://www.linkedin.com/in/mason-douglas-mcmanus/', '_blank')} className="cursor-pointer rounded-lg p-2 hover:bg-[#F2AE6F] transition duration-350">
                            <Linkedin size={42} />
                        </button>
                        <button onClick={() => window.open('https://www.instagram.com/mnmcm07/', '_blank')} className="cursor-pointer rounded-lg p-2 hover:bg-[#F2AE6F] transition duration-350">
                            <Instagram size={42} />
                        </button>
                    </div>
                </div>

                <div className="flex flex-row-reverse justify-center w-full mt-15 gap-5">
                    <div className="flex flex-row-reverse items-start gap-5">
                        <img className="w-50 h-50 rounded-[200px] shadow-lg" src="./images/nick.jpg" />
                        <div className="flex flex-col gap-2 items-end ">
                            <h1 className="text-4xl font-semibold">Nick C</h1>
                            <h1 className="text-xl max-w-xl text-right">This is Nick C's biography. It is pretty interesting isn't it! He looks very dapper. </h1>
                        </div>
                    </div>

                    <div className="flex flex-col h-full justify-between gap-3">
                        <button onClick={() => window.open('https://www.linkedin.com/in/nick-claditis-0541a9369/', '_blank')} className="cursor-pointer rounded-lg p-2 hover:bg-[#F2AE6F] transition duration-350">
                            <Linkedin size={42} />
                        </button>
                        <button onClick={() => window.open('https://www.instagram.com/nick_claditis/', '_blank')} className="cursor-pointer rounded-lg p-2 hover:bg-[#F2AE6F] transition duration-350">
                            <Instagram size={42} />
                        </button>
                    </div>
                </div>

            </div>
        </main>
    );
}