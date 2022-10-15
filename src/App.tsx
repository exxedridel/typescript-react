import { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import List from "./components/List"

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
        <h1>BLM subscribers</h1>
          <List subs={subs}/>
      </header>
    </div>
  );
}

export default App;
