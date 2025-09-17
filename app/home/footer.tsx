export function Footer() {
    return (
        <main id="footer" className="flex items-center justify-center pt-8 px-4 bg-[#587792] text-white pb-8">
            <div className="flex-1 flex flex-col items-center gap-2 min-h-0 text-center">
                <h1 >Website and App are property of Sage Study - Nick Claditis and Mason McManus - {new Date().getFullYear()}</h1>
                <h1><strong onClick={() => window.open("/privacy")} className="cursor-pointer">View Privacy Policy</strong></h1>
            </div>
        </main>
    );
}

const jumpToReleventDiv = (id: string) => {
    const releventDiv = document.getElementById(id);
    // behavior: "smooth" parameter for smooth movement
    releventDiv?.scrollIntoView({ behavior: "smooth" });
}