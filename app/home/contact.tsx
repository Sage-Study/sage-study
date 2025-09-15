import { BookCopy, Brain, Github, Instagram, Linkedin, Mail, Users } from "lucide-react";

export function Contact() {
    return (
        <main id="contact" className="flex items-center justify-center pt-16 bg-[#FFF6EA] text-black pb-25">
            <div className="flex-1 flex flex-col items-center gap-10 min-h-0">
                <div className="flex md:min-w-3xl mx-2 flex-col items-center gap-4 bg-white px-7 py-5 rounded-lg shadow-lg">
                    <div className="flex flex-row items-center gap-8 relative">
                        <Mail size={64} color="#8DB1AB" />
                        <h1 className="text-gray-900 font-semibold text-4xl relative z-10">Interact with Us!</h1>
                    </div>
                    <h3 className="text-xl max-w-2xl text-center text-gray-800">Follow our socials, send us a message, or give us a donation!</h3>
                </div>

                <div className="flex flex-row md:gap-3 items-center mx-2">
                    <h1 className="text-3xl font-semibold mr-5">Our socials:</h1>
                    <div className="flex flex-row md:gap-3 items-center hover:bg-[#F2AE6F] transition rounded-lg cursor-pointer select-none md:px-4 py-3">
                        <Instagram size={32} color="#587792" />
                        <h2 className="md:text-xl font-semibold">@sage-study</h2>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="text-3xl font-semibold">Business Email:</h1>
                    <h3 className="text-xl">sagestudy.business@gmail.com</h3>
                </div>

            </div>
        </main>
    );
}

const jumpToReleventDiv = (id: string) => {
    const releventDiv = document.getElementById(id);
    // behavior: "smooth" parameter for smooth movement
    releventDiv?.scrollIntoView({ behavior: "smooth" });
}