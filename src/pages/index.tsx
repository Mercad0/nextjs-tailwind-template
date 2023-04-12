import { Icon } from "@/components/Icon";
import { SiEslint, SiTailwindcss, SiTypescript } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { FaReact } from "react-icons/fa"

export default function Home() {
  const icons = [
    {
      name: "NextJS",
      href: "https://nextjs.org/",
      icon: <TbBrandNextjs />,
      color: "text-black hover:bg-gray-300 ",
    },
    {
      name: "TypeScript",
      href: "https://www.typescriptlang.org/",
      icon: <SiTypescript />,
      color: "text-sky-600 hover:bg-blue-300 ",
    },
    {
      name: "Eslint",
      href: "https://eslint.org/",
      icon: <SiEslint />,
      color: "text-purple-800 hover:bg-purple-300"
    },
    {
      name: "TailwindCSS",
      href: "https://tailwindcss.com/",
      icon: <SiTailwindcss />,
      color: "text-teal-600 hover:bg-teal-200",
    },
    {
      name: "React-Icons",
      href: "https://react-icons.github.io/react-icons/",
      icon: <FaReact />,
      color: "text-pink-700 hover:bg-pink-300"
    }
  ];
  return (
    <div className="text-7xl h-screen w-screen font-bold text-center bg-gradient-to-tr duration-700 transition-all justify-center flex from-red-400 to-violet-600">
    <div className="mx-auto text-center md:pt-32 pt-10">
      <div className=" md:w-[600px] w-fit duration-500 rounded-lg hover:rounded-3xl shadow-xl p-6 ">
        <h3 className="md:text-3xl text-xl font-medium text-white ">Installed Frameworks</h3>
        <div className="flex p-1 mt-6 justify-center">
          <Icon icons={icons} />
        </div>
      </div>
    </div>
    </div>
  );
}
