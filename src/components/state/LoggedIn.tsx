import { useState } from "react";

export default function LoggedIn() {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const handleLoging = () => {
    setIsloggedIn(true);
  };
  const handleLogout = () => {
    setIsloggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLoging}>Login</button>
      <button onClick={handleLogout}>Login</button>
      <div>User is Logged {isLoggedIn ? "In" : "Out"} </div>
    </div>
  );
}
