interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return <h1 className="
  text-2xl
  font-bold
  text-center
  text-slate-700
  ">{title}</h1>;
};

export default Heading;
