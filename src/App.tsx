import { useEffect, useRef, useState } from "react";
import "./App.css";
import List from "./components/List"
import Form from "./components/Forms"
import { Sub } from "./types"

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
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
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null)
  // stores a value between renders without rendering

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className="App" ref={divRef}>
      <header className="App-header">
        <h1>BLM subscribers</h1>
        <List subs={subs} />
        <Form onNewSub={handleNewSub} />
      </header>
    </div>
  );
}

export default App;
