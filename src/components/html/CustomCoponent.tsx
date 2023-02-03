import React from "react";
import { Greet } from "../Greet";

//importing proptypes from an existing component
const CustomCoponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.isloggedIn}</div>;
};

export default CustomCoponent;
