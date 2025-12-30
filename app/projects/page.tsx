import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";
import Link from "next/link";
import { projects } from "../utils/project_data";

function Projects() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <Title text="My Projects" />
      <div className="bg-black text-white p-4 mx-auto text-center">
        <p className="text-gray-300 text-sm">
          Most of my work has been done for companies or clients, so I’m only
          able to showcase a few public projects. The rest are private or
          proprietary.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.slug}`}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
