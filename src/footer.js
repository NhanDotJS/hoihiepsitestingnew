import React from 'react';
import {  MDBContainer, MDBFooter } from "mdbreact";

function Footer(){
    return(
        // <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">

          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.facebook.com/groups/HoiHiepSi"> Hội Hiệp Sĩ </a>
          <p> Bởi Thành Nhân và Đăng Huy</p>
      </div>
    // </MDBFooter>
    );
}

export default Footer