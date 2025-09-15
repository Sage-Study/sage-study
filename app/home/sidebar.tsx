import { BadgeQuestionMark, BookText, Home, Logs, Mail, Map, Menu, Users } from "lucide-react";
import { useState } from "react";

type SidebarProps = {
  activePage: "Home" | "About" | "Creators" | "Roadmap" | "Contact";
};

export default function Sidebar({ activePage }: SidebarProps) {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="hidden md:fixed md:flex left-0 top-0 h-full flex items-center p-2 z-50">
      <div
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className={`${expanded ? 'md:flex' : 'hidden md:flex'} bg-gray-100/30 backdrop-blur-sm shadow-lg rounded-lg flex-col justify-around px-2 py-5 gap-5 border-gray-300 border-2 hover:border-gray-500 transition-all duration-300 ease-in-out z-50`}
      >
        {/* Menu Item */}
        <div onClick={() => jumpToReleventDiv('home')} className={`flex flex-row items-center border-2 cursor-pointer border-transparent hover:border-gray-400 hover:shadow-md px-2 py-2 rounded-md transition ${activePage == "Home" ? 'animate-pulse' : ''}`}>
          <Home color={activePage == "Home" ? '#F2AE6F' : '#8d8860ff'} size={28} />
          <div
            className={` overflow-hidden transition-all duration-300 ease-in-out ${expanded ? "w-24 opacity-100 ml-4" : "w-0 opacity-0"
              }`}
          >
            <span className="text-black font-poppins text-xl">Home</span>
          </div>
        </div>

        <div onClick={() => jumpToReleventDiv('about')} className={`flex flex-row items-center border-2 cursor-pointer border-transparent hover:border-gray-400 hover:shadow-md px-2 py-2 rounded-md transition ${activePage == "About" ? 'animate-pulse' : ''}`}>
          <BookText color={activePage == "About" ? 'black' : '#8d8860ff'} size={28} />
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded ? "w-24 opacity-100 ml-4" : "w-0 opacity-0"
              }`}
          >
            <span className="text-black font-poppins text-xl">About</span>
          </div>
        </div>

        <div onClick={() => jumpToReleventDiv('creators')} className={`flex flex-row items-center border-2 cursor-pointer border-transparent hover:border-gray-400 hover:shadow-md px-2 py-2 rounded-md transition ${activePage == "Creators" ? 'animate-pulse' : ''}`}>
          <Users color={activePage == "Creators" ? 'black' : '#8d8860ff'} size={28} />
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded ? "w-24 opacity-100 ml-4" : "w-0 opacity-0"
              }`}
          >
            <span className="text-black font-poppins text-xl">Creators</span>
          </div>
        </div>

        <div onClick={() => jumpToReleventDiv('roadmap')} className={`flex flex-row items-center border-2 cursor-pointer border-transparent hover:border-gray-400 hover:shadow-md px-2 py-2 rounded-md transition ${activePage == "Roadmap" ? 'animate-pulse' : ''}`}>
          <Map color={activePage == "Roadmap" ? 'black' : '#8d8860ff'} size={28} />
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded ? "w-24 opacity-100 ml-4" : "w-0 opacity-0"
              }`}
          >
            <span className="text-black font-poppins text-xl">Roadmap</span>
          </div>
        </div>

        <div onClick={() => jumpToReleventDiv('contact')} className={`flex flex-row items-center border-2 cursor-pointer border-transparent hover:border-gray-400 hover:shadow-md px-2 py-2 rounded-md transition ${activePage == "Contact" ? 'animate-pulse' : ''}`}>
          <Mail color={activePage == "Contact" ? 'black' : '#8d8860ff'} size={28} />
          <div
            className={` overflow-hidden transition-all duration-300 ease-in-out ${expanded ? "w-24 opacity-100 ml-4" : "w-0 opacity-0"
              }`}
          >
            <span className="text-black font-poppins text-xl">Contact</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const jumpToReleventDiv = (id:string) => {
  const releventDiv = document.getElementById(id);
  // behavior: "smooth" parameter for smooth movement
  releventDiv?.scrollIntoView({behavior: "smooth"});
}