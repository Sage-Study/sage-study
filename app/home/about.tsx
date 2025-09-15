import { BookCopy, Brain, Github, Instagram, Linkedin, Users } from "lucide-react";

export function About() {
    return (
        <main id="about" className="flex items-center justify-center pt-16 pb-4 bg-[#FFF6EA] text-black">
            <div className="flex-1 flex flex-col items-center gap-10 min-h-0">
                <div className="flex md:min-w-3xl mx-2 flex-col items-center gap-4 bg-white px-7 py-5 rounded-lg shadow-lg">
                    <div className="flex flex-row items-center gap-8 relative">
                        <Brain size={64} color="#8DB1AB" />
                        <h1 className="text-gray-900 font-semibold text-2xl md:text-4xl relative z-10">About Sage Study</h1>
                    </div>
                    <h3 className="text-xl max-w-2xl text-center text-gray-800">Finally, a way to scroll ethically:</h3>
                </div>

                <div>
                    <h3 className="max-w-4xl text-xl px-3"><strong>Sage Study</strong> is a free mobile app that students can use to study for tests, memorize vocab, and remember concept. So far we are targetting the <strong>AP curriculum</strong> exclusively and we are working on adding more classes right now! For a complete list of classes, check out the <a onClick={() => jumpToReleventDiv('roadmap')} className="text-shadow-lg hover:text-[#F2AE6F] transition text-shadow-[#F4E04D]/25 cursor-pointer font-bold text-[#587792] animate-pulse">roadmap section!</a> </h3>
                </div>

                <div className="w-full flex justify-center bg-[#CEE397] py-5 px-3">
                    <div className="max-w-4xl flex flex-col items-start gap-3">
                        <h1 className="text-3xl font-semibold text-black">Our Rationale:</h1>

                        <h2 className="text-lg">Attention spans are decreasing and research corroborates it. We can't speak for you, but we feel extremely <strong>unproductive and guilty</strong> with the amount of time spent scrolling. So, enter <strong>Sage Study</strong>, a healthier way to scroll! In our app, you can scroll through customized questions taylored to <strong>your academics</strong>. Instead of withering away on reels, use our app to make studying fun again! </h2>
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