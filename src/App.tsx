import "./App.css";
import Button from "./components/Button";
import { Greet } from "./components/Greet";
import Oscar from "./components/Oscar";
import { Person } from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Container from "./components/Container";
import { ThemeContextProvider } from "./components/context/ThemeContex";
import { Box } from "./components/context/box";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumbers";
import CustomButton from "./components/html/button";
import { Text } from "./components/polymorphic/Text";

function App() {
  const PersonName = { first: "Ibrahim", last: "Abdulganiy" };
  const nameList = [
    {
      first: "Ben",
      last: "FOx",
    },
    { first: "Richard", last: "Miles" },
    { first: "Rebecca", last: "Lance" },
  ];
  return (
    <div className="App">
      <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <Private isLoggedIn={true} component={Profile} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <Greet name="Mayowa" messageCount={37} isloggedIn={false} />
      <Person name={PersonName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>Main Heading</Heading>
      <Oscar>
        <Heading>Welcome to oscar's pavelion</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("button clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", display: "none" }} />
      <RandomNumber value={10} isNegative />
      <CustomButton variant="primary" onClick={() => console.log("clciked")}>
        Primary Button
      </CustomButton>
      <Text as="p" size={"sm"} color={"primary"} />
      <Text as="h1" size={"md"} color={"primary"} />
      <Text htmlfor="" as="label" size={"lg"} color={"primary"} />
    </div>
  );
}

export default App;
