type StatusProps = {
  status: "loading" | "success" | "error";
};
export default function Status(props: StatusProps) {
  let message;

  if (props.status === "loading") {
    message = "Loading";
  } else if (props.status === "success") {
    message = "data fetch successfully!";
  } else if (props.status === "error") {
    message = "Error fecting data";
  }

  return <div>status - {message}</div>;
}
