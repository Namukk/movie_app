import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      {/* exact={true}는 router가 /일때만 render하도록 설정 */}
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
