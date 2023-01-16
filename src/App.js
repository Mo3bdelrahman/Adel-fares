import React, { Component } from "react";
import Layout from "./components/layout/layout";
import Auxiliary from "./hoc/auxiliary";
import Countdown from "./components/countdown/countdown";

class App extends Component {
  render() {
    let showlayout = "";
    if (true) {
      showlayout = <Countdown />;
    } else {
      showlayout = <Layout />;
    }

    return <Auxiliary>{showlayout}</Auxiliary>;
  }
}
export default App;
