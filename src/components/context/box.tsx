import { useContext } from "react";
import { ThemeContext } from "./ThemeContex";

export const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.primary.main }}>Theme context</div>
  );
};
