import React from "react";
import { Name } from "./Person.types";
type PersonListProps = {
  names: Name[];
};

export default function PersonList({ names }: PersonListProps) {
  return (
    <div>
      {names.map((name, i) => {
        return (
          <h2 key={i}>
            {name.first} , {name.last}
          </h2>
        );
      })}
    </div>
  );
}
