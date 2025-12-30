import AboutMeQuote from "./components/AboutQuote";
import SearchInput from "./components/SearchInput";

export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-y-24 items-center min-h-[90vh]">
      <AboutMeQuote />
      <SearchInput />
    </div>
  );
}
