import React from "react";

type buttonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;
function CustomButton({ variant, children, ...rest }: buttonProps) {
  return (
    <div>
      <button className={`class-width-${variant}`} {...rest}>
        {children}
      </button>
    </div>
  );
}

export default CustomButton;
