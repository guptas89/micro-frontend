import React from "react";
import "./App.css";
const TicketList = React.lazy(() => import("app2/TicketList"));

function App() {
  return (
    <div className="App">
      <h2>Welcome to the world of Micro Frontend!!</h2>
      <h1>App-1 Component</h1>
      <h5>Hello, I am rendering from App-1</h5>
      <hr />
      <h1>App-2 Component</h1>
      <h5>
        Hello, Below Table is rendering from App-2 which is running on
        http://localhost:3001
      </h5>
      <React.Suspense fallback="Loading...">
        <TicketList />
      </React.Suspense>
    </div>
  );
}

export default App;
