import { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

interface Sub {
  nick: string
  avatar: string
  subMonths: number
  description?: string
}

const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: "Dapelu hace de moderador a veces",
  },
  {
    nick: "sergio_serrano",
    subMonths: 7,
    avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
  },
];

function App() {
  // const [subs, setSubs] = useState<Arrar<Sub>>([]);
  // can also be writed like this
  // const [subs, setSubs] = useState<Sub[]>([]);

  // Sets the subs interface from AppState interface when multiple states are used
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0);
  // this helps when States are more complex 

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Heved subs</h1>
        <ul>
          {subs.map((sub) => {
            return (
              // typescript provide better auto-complete
              <li key={sub.nick}>
                <img src={sub.avatar} alt={"Avatar for ${sub.nick}"} />
                <h4>
                  {sub.nick} (<small>{sub.subMonths}</small>)
                </h4>
                {/* typescript auto corrects when description needed ? sing for undefined property */}
                <p>
                  {sub.description?.substring(0, 21)}
                  {sub.description ? "..." : ""}
                </p>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
