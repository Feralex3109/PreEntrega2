import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define tus rutas */}
        <Switch>
          {/* Ruta para la página de inicio */}
          <Route exact path="/" component={Home} />

          {/* Ruta para la página "Acerca de" */}
          <Route path="/about" component={About} />

          {/* Ruta para manejar páginas no encontradas */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
