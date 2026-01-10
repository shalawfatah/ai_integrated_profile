"use client"; // mark as client component

import { useParams } from "next/navigation"; // or useRouter from next/router
import { projects } from "@/app/utils/project_data";
import Image from "next/image";

export default function ProjectPage() {
  const params = useParams(); // returns { slug: string }
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return <p className="text-center mt-20">Project not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {project.note.length > 3 ? (
        <div className="bg-black text-white p-4 mx-auto text-center">
          <p className="text-gray-300 text-sm">{project.note}</p>
        </div>
      ) : null}
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        {project.title}
      </h1>

      <div className="rounded-xl overflow-hidden shadow-lg">
        <Image
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-64 object-cover"
          width={800}
          height={400}
        />
      </div>

      <p className="text-zinc-800 dark:text-zinc-200 text-lg">
        {project.description}
      </p>

      <div>
        <h2 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.techstack.map((tech, idx) => (
            <span
              key={idx}
              className="bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 px-3 py-[2px] rounded-[2px] text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
          Features
        </h2>
        <ul className="list-disc list-inside space-y-1 text-zinc-800 dark:text-zinc-200">
          {project.features.map((feature, idx) => (
            <div key={idx}>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-fg-success mr-1.5 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                {feature}
              </li>
            </div>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 mt-4">
        <button
          type="button"
          onClick={() => window.open(project.repo_link, "_blank")}
          className={`px-4 py-[2px] rounded-[2px] text-sm font-bold transition bg-blue-600 hover:bg-blue-700 text-white cursor-pointer`}
        >
          View Repo
        </button>
        <button
          type="button"
          onClick={() => window.open(project.live_link, "_blank")}
          className={`px-4 py-[2px] rounded-[2px] text-sm font-bold transition bg-green-600 hover:bg-green-700 text-white cursor-pointer`}
        >
          Live Site
        </button>
      </div>
    </div>
  );
}
