import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
export default function User() {
  const [user, setUser] = useState<null | AuthUser>();
  //   const [user, setUser] = useState<AuthUser>({} as AuthUser); declare an empty string with type AuthUser

  const handleLoging = () => {
    setUser({
      name: "mayo",
      email: "mayowa@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLoging}>Login</button>
      <button onClick={handleLogout}>Login</button>
      <div>User name is {user?.name} </div>
      <div>Email is {user?.name} </div>
    </div>
  );
}
