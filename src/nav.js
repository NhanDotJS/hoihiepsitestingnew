import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, 
} from "mdbreact";
import logo from "./HoiHiepSiWall-3.png";

// import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar className="Navbackground" dark expand="md">
        <MDBNavbarBrand>
          {/* <strong className="white-text">Hội Hiệp Sỹ</strong> */}
          <img className="imagelogo" src={logo} alt=""/>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/vanmau">Văn Mẫu</MDBNavLink>
            </MDBNavItem>
            {/* <MDBNavItem>
              <MDBNavLink to="/anhmau">Ảnh Mẫu</MDBNavLink>
            </MDBNavItem> */}
            <MDBNavItem>
              <MDBNavLink to="/leaderboard">Leaderboard</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/about">About</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;