import "App.scss";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown, DropdownButton, Nav, NavItem, NavLink } from "react-bootstrap";

import Home from "pages/home";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Queries from "pages/queries";
import About from "pages/about";
import Food from "pages/food";
import Foods from "pages/foods";
import { nextTheme, setTheme } from "redux/actions";
import { themeTitles } from "styles/themes";
import { getTheme } from "redux/selectors";
import Login from "pages/login";
// import { queries } from "@testing-library/react";

const routeList = [
  {
    id: "login",
    title: "Login Page",
    path: "/login",
    render: () => <Login />
  },
  {
    id: "about",
    title: "About",
    path: "/about",
    exact: true,
    render: () => <About />
  },
  {
    id: "queries",
    title: "Queries",
    path: [
      "/queries/:rqID",
      "/queries"
    ],
    render: () => <Queries />
  },
  {
    id: "foods",
    title: "Foods",
    path: [
      "/foods/:size/:page/:search",
      "/foods/:size/:page",
      "/foods"
    ],
    exact: true,
    render: () => <Foods />
  },
  {
    id: "food",
    title: "Food",
    path: "/food/:foodID",
    render: () => <Food />
  },
  {
    id: "home",
    title: "Home",
    path: "/",
    exact: false,
    render: () => <Home />
  }
];

function App() {
  const [routes, setRoutes] = useState([]);
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);

  useEffect(() => {
    document.title = `startupApp-um`;
    setRoutes(routeList)
    // console.log( themeTitles ) ;
  }, []);

  return (
    <div className="App">
      <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + theme.path} />
      {/* <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL+"styles/App.scss"}></link> */}

      <header className="App-header">
        <Navbar className="navbar-dark bg-primary container-fluid" expand="lg">
          <Navbar.Brand>Startup SPA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="pills" className="container-fluid">
              <NavLink href="#/home">Home</NavLink>
              <NavLink href="#/foods">Foods</NavLink>
              <NavLink href="#/queries">Requests</NavLink>
              <NavLink href="#/about" className="float-right">About</NavLink>
              <NavItem className="ml-auto">
                <NavLink href="#/login" float={'right'} className="float-right">LogIn</NavLink>
              </NavItem>

            </Nav>
            {/* <Link onClick={() => window.location.replace("/about")}>About</Link> */}
          </Navbar.Collapse>
        </Navbar>
        <div className="mb-2">
        </div>
      </header>
      <body>
        <Router basename="/">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={route.id}
                path={route.path}
                exact={route.exact}
              >
                <route.render />
              </Route>
            ))}
          </Switch>
        </Router>
      </body>
      <footer />
    </div>
  );
}

export default App;


{/* <DropdownButton
className="ml-auto"
id={`dropdown-button-drop-left`}
key={'left'}
drop={'right'}
title={theme.title}
>
<Dropdown.Item type="button" onClick={() => dispatch(nextTheme())}>
  Next theme
</Dropdown.Item>
<Dropdown.Header>UI themes</Dropdown.Header>
{themeTitles.map((title, ndx) => (
  <Dropdown.Item key={ndx} onSelect={() => dispatch(setTheme(ndx))}>{title}</Dropdown.Item>
))}
</DropdownButton> */}
