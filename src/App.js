import React, { Component } from 'react';
import {
    Row,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import membersPage from './pages/membersPage'
import HomePage from './pages/HomePage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Row>
            <div className="header">
              <h1 className="header-name">My Awesome Website</h1>
            </div>
            <div className="Nav">
              <Nav pills>
                <NavItem>
                  <NavLink className="nav-link" href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" href="/members">Members</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" href="#">Photos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" href="#">Discussions</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" href="#">More</NavLink>
                </NavItem>
              </Nav>
             </div>
           </Row>
            <Switch>
            <Route path='/members' component={membersPage}/>
            <Route path='/' component={HomePage}/>
            </Switch>
          </div>
        </Router>
        );
      }
    }

export default App;
