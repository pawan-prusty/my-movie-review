import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Styles/App.css";
import Header from "./header";
import MovieList from "./MovieList";
import Review from "./Review";
import Blog from "./Blog";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <MovieList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
