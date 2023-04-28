import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// Add code to import the components
import { AppProvider } from "./context/AppContext";
import Budget from "./components/Budget";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";
import Remaining from "./components/Remaining";
import Currency from "./components/Currency";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const authenticateUser = (username, password) => {
    axios
      .post("http://127.0.0.1:5000/authenticate", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.authenticated) {
          setAuthenticated(true);
        } else {
          alert("Incorrect username or password");
        }
      })
      .catch((error) => {
        alert("Error authenticating user");
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    authenticateUser(username, password);
  };
  return (
    <div>
      {!authenticated && (
        <form onSubmit={handleSubmit} className="container mt-5 frm-login">
          <h2>Log in</h2>
          <div class="form-group">
            <label for="username">Username:</label>
            <input
              type="text"
              class="form-control"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              class="form-control"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <br />
          <button type="submit" class="btn btn-primary">
            Log in
          </button>
        </form>
      )}
      {authenticated && (
        <div className="container">
          <h1 className="text-end">Welcome, {username}!</h1>
          <AppProvider>
            <div className="container">
              <h1 className="mt-3">Company's Budget Allocation</h1>
              <div className="row mt-4">
                <div className="col-sm">
                  <Budget />
                </div>
                <div className="col-sm">
                  <Remaining />
                </div>
                <div className="col-sm">
                  <ExpenseTotal />
                </div>
                <div className="col-sm">
                  <Currency />
                </div>
              </div>
              <h3 className="mt-3">Allocation</h3>
              <div className="row">
                <div className="col-sm">
                  <ExpenseList />
                </div>
              </div>
              <h3 className="mt-3">Change allocation</h3>
              <div className="row mt-3">
                <div className="col-sm">
                  <AllocationForm />
                </div>
              </div>
            </div>
          </AppProvider>
        </div>
      )}
    </div>
  );
};

export default App;
