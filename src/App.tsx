import { useState } from "react";
import "./App.css";

// x hämta en fakta från api och skriva ut till konsolen
// x visa upp faktan på sidan
// x skapa en knapp som hämtar en ny fakta
// x visa den fakta som vi hämtar istället
// hämta och visa fakta i olika komponenter
// använd redux för att spara fakta
// fixa typer och felhantering

function App() {
  const [randomFact, setRandomFact] = useState<string>("");

  //fetchFact(setRandomFact);

  return (
    <>
      <h1>En intresting fact</h1>
      <button onClick={() => fetchFact(setRandomFact)}>Get it!</button>
      <p>{randomFact}</p>
    </>
  );
}

async function fetchFact(
  setRandomFact: React.Dispatch<React.SetStateAction<string>>
) {
  const URL = "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en";

  const response = await fetch(URL);
  const json = await response.json();
  const randomFact = json.text;
  console.log(randomFact);
  setRandomFact(randomFact);
}

export default App;
