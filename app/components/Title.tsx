export default function Title({ text }: { text: string }) {
  return (
    <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
      {text}
    </h1>
  );
}
