interface HeadingProps {
  title: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, center }) => {
  return <h1 className=
  {`${center ? 'text-center' : 'text-start'}
  text-2xl
  font-bold`}
  >{title}</h1>;
};

export default Heading;
