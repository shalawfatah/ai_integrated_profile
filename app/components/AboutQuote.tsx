export default function AboutMeQuote() {
  return (
    <div className="max-w-4xl mx-auto p-10 rounded-xl shadow-lg relative my-8">
      <span className="text-[300px] text-zinc-300 dark:text-zinc-700 absolute -top-36 -left-4 select-none mx-4">
        “
      </span>

      <p className="text-xl text-zinc-800 dark:text-zinc-100 relative z-10 text-center">
        Hey 👋 my name is <strong>Shalaw</strong>, a senior web developer. I
        enjoy working with{" "}
        <span className="text-[#F0DB4F] font-bold">Javascript</span> /
        <span className="text-[#007ACC] font-bold"> TypeScript</span> and{" "}
        <strong className="text-[#61DBFB]">React</strong>, along with their
        ecosystems and modern tooling. I take pride in building great UI, along
        with integration into different backends, databses, AI and LLMs.
      </p>
    </div>
  );
}
