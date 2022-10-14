import React from "react";
// import logo from './logo.svg';
import "./App.css";

function App() {
  // when hovered subs state is showing that description can be undefined
  // typescript stated the "contract" of the state
  const [subs, setSubs] = React.useState([
    {
      nick: "dapelu",
      subMonths: 3,
      avatar: "https://i.pravatar.cc/150?u=dapelu",
      description: "Dapelu hace de moderador a veces",
    },
    {
      nick: "sergio_serrano",
      subMonths: 7,
      avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
    },
  ]);

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
                <p>{sub.description?.substring(0, 21)}{sub.description ? "..." : ""}</p>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
