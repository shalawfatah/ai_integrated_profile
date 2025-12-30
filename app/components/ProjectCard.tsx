interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  className = "",
}: ProjectCardProps) {
  return (
    <div
      className={`
        relative
        w-full sm:w-80 h-52
        rounded-xl
        overflow-hidden
        shadow-lg
        cursor-pointer
        transition-transform
        hover:scale-105
        ${className}
      `}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

      {/* Content */}
      <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent dark:from-black/90 dark:via-black/60">
        <h3 className="text-white font-bold text-lg">{title}</h3>
        <p className="text-gray-200 text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
