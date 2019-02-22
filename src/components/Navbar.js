import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

//This is Inline Styling // See lines 40, 45, 48, 51, 54//
const styles = {    
  navbar: {
    backgroundColor: 'blue'
  },
  text: {
    color: 'white',
  }
}

class Sitebar extends React.Component {
  constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <div style={styles.navbar} > 
          <Navbar expand="md">
              <NavbarBrand href="/" style={styles.text}>ORION</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/components/" style={styles.text}>SHOP</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap" style={styles.text}>FAQ</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap" style={styles.text}>SUPPORT</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap" style={styles.text}>MAINTENANCE</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
      );
    }
}

export default Sitebar;