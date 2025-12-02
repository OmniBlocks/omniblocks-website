import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-black font-sans p-6">
      <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
        The Ultimate Multilanguage IDE
      </h1>
      <a
        href="/ide/visual"
        className="rounded-full bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors"
      >
        Open Visual IDE
      </a>
    </div>
  );
}
