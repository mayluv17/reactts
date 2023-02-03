import { personProps } from "./Person.types";
export const Person = (props: personProps) => {
  return (
    <>
      Mya name is {props.name.first} {props.name.last}
    </>
  );
};
