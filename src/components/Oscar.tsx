type Oscarprops = {
  children: React.ReactNode;
};
export default function Oscar(props: Oscarprops) {
  return <div>{props.children}</div>;
}
