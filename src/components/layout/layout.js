import React from "react";
import Auxiliary from "../../hoc/auxiliary";

const Layout = (props) => (
  <Auxiliary>
    <div>allcomponents</div>
    <div>{props.children}</div>
  </Auxiliary>
);

export default Layout;
