

export default function Home() {
  return (
    <div className="flex-row align text-7xl h-screen w-full font-bold text-center bg-gradient-to-tr duration-700 transition-all from-red-400 to-violet-600">
      <p className=" hover:bg-slate-300 transition-all duration-1000 hover:animate-bounce w-3/12 rounded-3xl">
        Next-Js
      </p>
      <p className="hover:bg-teal-400 transition-all duration-1000 hover:animate-bounce w-6/12 rounded-3xl">
        Tailwind Css
      </p>
      <p className="hover:bg-yellow-400 transition-all duration-1000 hover:animate-bounce w-9/12 rounded-3xl">
        Eslint
      </p>
      <p className="hover:bg-pink-500 transition-all duration-1000 hover:animate-bounce w-12/12 rounded-3xl">
        React Icons
      </p>
    </div>
  );
}
