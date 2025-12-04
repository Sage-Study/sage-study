import { BookCopy, HandCoins, Phone, Rabbit, Smartphone } from "lucide-react";

export function Title({ message }: { message: string }) {
  return (
    <main id="home" className="flex items-center justify-center pt-16 pb-4 bg-[#FFF6EA] text-black">
      <div className="flex-1 flex flex-col items-center gap-10 min-h-0">
        <div className="flex flex-row items-center gap-8 relative">
          <BookCopy size={64} color="#8DB1AB" />
          <div className="relative">
            <svg
              className="absolute -inset-4 z-10"
              
              viewBox="0 0 400 120"
              fill=""
            >
              <path
                d="M0 60 Q100 20, 200 40 T380 60 Q300 100, 200 80 T20 60 Z"
                fill="#f2ae6f73"
                opacity="0.9"
              />
            </svg>
            <h1 className="text-[#587792] font-bold md:text-7xl text-5xl relative z-10">Sage Study</h1>
          </div>
        </div>
        <h3 className="mt-8 text-2xl max-w-2xl text-center text-gray-800 z-20 bg-[#FFF6EA] rounded-lg p-1 ">An app for studying smarter... or you could say, 'sagaciously!'</h3>

        <img className="hidden lg:flex lg:absolute w-47 cursor-pointer hover:scale-115 transition duration-500 border-2 rounded-lg border-gray-500 tranform rotate-2 h-100 right-10 top-5" src="./images/sample.png" alt="" />

        <button onClick={() => window.open('https://apps.apple.com/us/app/sage-study/id6755408711#productRatings')} className="mt-8 transform hover:-rotate-3 text-xl hover:shadow-[#CEE397] bg-gradient-to-r from-[#F2AE6F] to-[#F4E04D] text-center shadow-lg font-semibold border-2 border-gray-400 hover:border-gray-700 hover:scale-115 hover:to-[#CEE397] hover:from-[#8DB1AB] cursor-pointer transition duration-250 px-10 py-5 rounded-2xl mt-3">Download from the APP STORE TODAY!</button>

    <p className="px-5 md:px-0 text-center">Stay up-to-date on our progress by checking the website and following one of our <a className="cursor-pointer hover:text-[#F2AE6F] transition font-bold text-xl text-[#587792]" onClick={() => jumpToReleventDiv('contact')}>socials!</a></p>

        <div className="grid md:grid-cols-3 px-5 md:px-25 w-full gap-7 mt-5 bg-[#F4E04D] py-10">
          <div className="flex flex-col items-center bg-[#FFF6EA] py-5 px-5 gap-5 rounded-lg shadow-xl shadow-black/25 cursor-pointer transform hover:-translate-y-3 transition duration-250">
            <div className="flex flex-row items-center gap-4">
              <Rabbit size={38} color="#587792" />
              <h3 className="text-2xl text-gray-800 font-semibold">Study fast!</h3>
            </div>
            <p className="text-md">Sometimes, you don't have time for a long study break: that's where <strong className="text-[#587792]">Sage Study</strong> comes in! Just open the app for a 10 minutes a day!</p>
          </div>

          <div className="flex flex-col items-center bg-[#FFF6EA] py-5 px-5 gap-5 rounded-lg shadow-xl shadow-black/25 cursor-pointer transform hover:-translate-y-3 transition duration-250">
            <div className="flex flex-row items-center gap-4">
              <Smartphone size={38} color="#587792" />
              <h3 className="text-2xl text-gray-800 font-semibold">Mobile-first!</h3>
            </div>
            <p className="text-md">Studying doesn't require a laptop, textbooks, or paper: just grab the device we've all come to rely on.</p>
          </div>

          <div className="flex flex-col items-center bg-[#FFF6EA] py-5 px-5 gap-5 rounded-lg shadow-xl shadow-black/25 cursor-pointer transform hover:-translate-y-3 transition duration-250">
            <div className="flex flex-row items-center gap-4">
              <HandCoins size={38} color="#587792" />
              <h3 className="text-2xl text-gray-800 font-semibold">The app is free!</h3>
            </div>
            <p className="text-md">Sage Study is committed to helping students without charge; if you want to support us, refer your friends (or give a small donation 😊 )!!</p>
          </div>

        </div>
      </div>
    </main>
  );
}

const jumpToReleventDiv = (id:string) => {
  const releventDiv = document.getElementById(id);
  // behavior: "smooth" parameter for smooth movement
  releventDiv?.scrollIntoView({behavior: "smooth"});
}