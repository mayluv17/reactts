type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "left" | "center" | "right";

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center"; //we cobine those optional value left and righ and exluded center-center from the combination we can have, included 'center
};

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
};
