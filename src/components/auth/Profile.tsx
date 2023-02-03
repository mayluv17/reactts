export type ProfileProps = {
  name: string;
};
export default function Profile({ name }: ProfileProps) {
  return <div>Private Profile component. Namis is {name}</div>;
}
