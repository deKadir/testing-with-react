type GreetProps = {
  name?: String;
};

const Greet = (props: GreetProps) => {
  return <div>Hello {props.name}</div>;
};

export default Greet;
