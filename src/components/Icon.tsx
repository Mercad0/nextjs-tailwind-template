
interface IconProps {
    icons: {
      name: string;
      href: string;
      icon: any;
      color: string;
    }[];
  }
  
  export const Icon = ({ icons }: IconProps) => {
    
    return (
      <div className="flex flex-wrap gap-2 justify-center">
        {icons.map(({ href, name, icon, color }) => (
          <a href={href} key={href} target="_blank" rel="noopener noreferrer">
            <div
              className={`flex items-center flex-col justify-center py-1 h-20 md:w-24 w-16 rounded-xl text-4xl duration-300 hover:text-5xl ${color}`}
            >
              {icon}
              <div className="md:text-base text-sm text-white">{name}</div>
            </div>
          </a>
        ))}
      </div>
    );
  };