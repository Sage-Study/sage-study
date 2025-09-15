import type { Route } from "./+types/home";
import { Title } from "../home/title";
import { Creators } from "../home/creators";
import { About } from "~/home/about";
import { Roadmap } from "~/home/roadmap";
import { Contact } from "~/home/contact";
import { Footer } from "~/home/footer";
import Sidebar from "~/home/sidebar";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Sage Study" },
    { name: "description", content: "Simple, addictive studying!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: "Hello from Vercel" };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="min-h-screen width-screen bg-[#FFF6EA]">
      <Sidebar activePage="Home"/>
      <Title message={loaderData.message} />
      <About />
      <Creators />
      <Roadmap />
      <Contact/>
      <Footer/>
    </div>
  );
}
