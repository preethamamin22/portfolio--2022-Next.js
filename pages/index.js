import Link from "next/link";

import Timeline from "../components/Timeline";
import Container from "../components/Container";
import Layout from "../components/Layout";
// import BlogPost from '../components/BlogPost';n
// import Subscribe from '../components/Subscribe';
import ProjectCard from "../components/ProjectCard";
import { Skills } from "@components/Skills";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 ">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white ">
        Hey, I’m Preetham Amin
      </h1>
      <h2 className="prose text-gray-600 dark:text-gray-400 mb-6">
        I am a Bangalore based Product Designer. I love designing and building for the web,
        you can read more about what I do and things I love over my website
        preetham.com.
      </h2>
      {/* <div className='flex space-x-4'>
        <button className='flex items-center justify-center px-4 py-2  bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded  '>
          Resume
        </button>
        <button className='flex items-center justify-center  px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded '>
          Contact
        </button>
      </div> */}

      {/* <Skills /> */}

      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Projects
      </h3>

      <ProjectCard
        title="Food Ordering App"
        description="A simple Food Ordering App. My first ever UI Design. "
        href="https://www.behance.net/gallery/160198615/Food-Ordering-App"
        icon="nextjs"
      />
      <Timeline />
    </div>
  );
}
