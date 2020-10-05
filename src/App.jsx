import "App.scss";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown, DropdownButton, Nav, NavLink } from "react-bootstrap";

import Home from "pages/home";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Queries from "pages/queries";
import About from "pages/about";
import Food from "pages/food";
import Foods from "pages/foods";
import { nextTheme, setTheme } from "redux/actions";
import { themeTitles } from "styles/themes";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.uiTheme);

  useEffect(() => {
    document.title = `startupApp-um`;
    // console.log( themeTitles ) ;
  }, []);

  return (
    <div className="App">
      <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + theme.path} />
      {/* <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL+"styles/App.scss"}></link> */}
      <Router basename="#/">

        <header className="App-header">
          <Navbar className="navbar-dark bg-primary" expand="lg">
            <Navbar.Brand>Startup SPA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavLink href="#/home">Home</NavLink>
                <NavLink href="#/foods">Foods</NavLink>
                <NavLink href="#/queries">Requests</NavLink>
                <NavLink href="#/about">About</NavLink>
              </Nav>
              <DropdownButton id="dropdown-basic-button" title={theme.title}>
                { themeTitles.map( (title,ndx)  => (
                  <Dropdown.Item onSelect={() => dispatch(setTheme(ndx))}>{title}</Dropdown.Item>
                ))}
              </DropdownButton>
              <Button type="button" onClick={() => dispatch(nextTheme())}>
                Next theme
              </Button>
              {/* <Link onClick={() => window.location.replace("/about")}>About</Link> */}
            </Navbar.Collapse>
          </Navbar>

        </header>
        <Switch>
          <Route path="/food/:foodID">
            <Food />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/queries/:rqID">
            <Queries />
          </Route>
          <Route path="/queries">
            <Queries />
          </Route>
          <Route path="/foods/:size/:page/:search">
            <Foods />
          </Route>
          <Route path="/foods/:size/:page">
            <Foods />
          </Route>
          <Route path="/foods">
            <Foods />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

