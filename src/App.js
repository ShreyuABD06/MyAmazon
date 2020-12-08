import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HvzF8CklVXe73mM368as5T2MTfkGpAaypVltikaJAFQs7ONJDjcJrQfEwrPXN9UhPFeDEeddR8aTkEKuoHXkSgT00EY5Pf0JL"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //Will only run once when the app component loads
    auth.onAuthStateChanged(authuser => {
      console.log("THE USER is >>>", authuser);
      if (authuser) {
        //User Logged in or was logged in
        dispatch({
          type: "SET_USER",
          user: authuser
        });
      } else {
        //User Logged Out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
