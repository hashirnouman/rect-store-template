import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddProduct from "./pages/AddProduct";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/addproduct">
            <AddProduct/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
