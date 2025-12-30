import Title from "../components/Title";

function About() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 text-zinc-900 dark:text-zinc-100">
      <Title text="About Me" />

      <ul className="space-y-3 list-none">
        <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
          <span className="text-xl">💻</span>
          <span>
            Frontend developer specialized in <strong>React (JS/TS)</strong>
          </span>
        </li>

        <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
          <span className="text-xl">🌐</span>
          <span>
            Experience with <strong>Vue, Angular, and Svelte</strong>
          </span>
        </li>

        <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
          <span className="text-xl">🛠️</span>
          <span>
            Backend experience with <strong>Node.js, Express, PHP</strong> and{" "}
            <strong>WordPress</strong>
          </span>
        </li>

        <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
          <span className="text-xl">📊</span>
          <span>
            Master’s in Business Administration (
            <strong>Project Management</strong>)
          </span>
        </li>

        <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
          <span className="text-xl">📋</span>
          <span>
            Hands-on experience in <strong>technical project management</strong>
          </span>
        </li>

        <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
          <span className="text-xl">⚡</span>
          <span>
            Strong in-demand skills:{" "}
            <strong>TypeScript, Next.js, Git, CI/CD</strong>
          </span>
        </li>

        {/* NEW – AI & Automation */}
        <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
          <span className="text-xl">🤖</span>
          <span>
            Integrating <strong>AI & LLMs</strong> into websites and web
            applications
          </span>
        </li>

        <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
          <span className="text-xl">🔁</span>
          <span>
            Building <strong>AI-powered automations</strong> using{" "}
            <strong>n8n</strong> and modern workflow tools
          </span>
        </li>

        <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
          <span className="text-xl">☁️</span>
          <span>Familiar with cloud deployments and modern dev workflows</span>
        </li>

        <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
          <span className="text-xl">🧪</span>
          <span>
            Writing clean, tested, and accessible frontend applications
          </span>
        </li>

        <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
          <span className="text-xl">🐧</span>
          <span>
            Heavy weight in <strong>Git, Linux, and Neovim</strong>
          </span>
        </li>

        <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
          <span className="text-xl">🎨</span>
          <span>
            Creative problem-solver passionate about building{" "}
            <strong>user-friendly apps</strong>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default About;
