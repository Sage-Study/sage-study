import { BookCopy, Brain, Github, Instagram, Linkedin, Map, Users, CheckCircle2, Clock, Target, Star, Code, Smartphone, Zap, Shield, Users2, Radio, List, BadgePlus, Hammer, Columns3Cog } from "lucide-react";

export function Roadmap() {
    const roadmapItems = [
        {
            type: 'current',
            title: 'Go Live',
            description: 'Launch the initial version of Sage Study with core features on IOS',
            date: 'Sep-Oct 2025',
            icon: Radio
        },
        {
            type: 'current',
            title: 'Class List',
            description: 'Add drop 1 of the following classes: United States History, Human Geography, Environmental Science, Comparative Government',
            date: 'Sep-Oct 2025',
            icon: List
        },
        {
            type: 'planned',
            title: 'Expand Classes',
            description: 'Add additional classes with new formats (to support math or English)',
            date: 'Dec 2025',
            icon: BadgePlus
        },
        {
            type: 'planned',
            title: 'New Study Tools',
            description: 'Add new tools such as flashcards, tests, videos',
            date: 'Jan 2026',
            icon: Hammer
        },
        {
            type: 'planned',
            title: 'Custom Sets',
            description: 'Let users create, publish, share, and download study sets',
            date: 'TBD 2026',
            icon: Columns3Cog
        }
    ];

    const getStatusColor = (type: string) => {
        switch (type) {
            case 'completed': return 'bg-green-500';
            case 'current': return 'bg-blue-500';
            case 'planned': return 'bg-orange-400';
            default: return 'bg-gray-400';
        }
    };

    const getStatusText = (type: string) => {
        switch (type) {
            case 'completed': return 'Completed';
            case 'current': return 'In Progress';
            case 'planned': return 'Planned';
            default: return 'Unknown';
        }
    };

    const jumpToRelevantDiv = (id: string) => {
        const relevantDiv = document.getElementById(id);
        relevantDiv?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main id="roadmap" className="flex items-center justify-center pt-10 pb-4 bg-[#FFF6EA] text-black">
            <div className="flex-1 flex flex-col items-center gap-10 min-h-0 max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex min-w-3xl flex-col items-center gap-4 bg-white px-7 py-5 rounded-lg shadow-lg">
                    <div className="flex flex-row items-center gap-8 relative">
                        <Map size={64} color="#8DB1AB" />
                        <h1 className="text-gray-900 font-semibold text-4xl relative z-10">Our Roadmap</h1>
                    </div>
                    <h3 className="text-xl max-w-2xl text-center text-gray-800">We are always updating the app! Take a look at our progress:</h3>
                </div>

                {/* Legend */}
                <div className="flex flex-row gap-6 bg-white px-6 py-3 rounded-lg shadow-md">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">Completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">In Progress</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">Planned</span>
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative w-full max-w-3xl max-h-[60vh] overflow-y-auto border-2 border-gray-400 rounded-lg p-5">
                    {/* Vertical line */}

                    {roadmapItems.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div className="relative flex items-start mb-8 last:mb-0">
                                <div className="absolute left-8 top-5 h-[95%] bottom-0 w-0.5 bg-gray-300"></div>
                                <div key={index} className="relative flex items-start mb-8 last:mb-0">
                                    {/* Timeline dot */}
                                    <div className={`absolute left-6 w-4 h-4 rounded-full ${getStatusColor(item.type)} border-4 border-white shadow-md z-10`}></div>

                                    {/* Content card */}
                                    <div className="ml-16 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 w-full">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <IconComponent size={24} className="text-gray-600" />
                                                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                                            </div>
                                            <div className="flex flex-col items-end gap-1">
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(item.type)}`}>
                                                    {getStatusText(item.type)}
                                                </span>
                                                <span className="text-sm text-gray-500">{item.date}</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Call to action */}
                <div className="bg-gradient-to-r from-[#8DB1AB] to-[#587792] text-white rounded-lg p-6 shadow-lg max-w-2xl w-full text-center">
                    <h3 className="text-xl font-semibold mb-2">Have suggestions?</h3>
                    <p className="mb-4">We'd love to hear your ideas for making Sage Study even better!</p>
                    <button className="bg-white text-[#587792] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                        Share Your Ideas
                    </button>
                </div>
            </div>
        </main>
    );
}