type GreetProps = {
  name: string;
  messageCount?: number; //means messaegcount is optional
  isloggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;

  return (
    <div>
      {props.isloggedIn
        ? `Welcome ${props.name}! you have ${messageCount} unread message`
        : "welcome GUEST"}
    </div>
  );
};
