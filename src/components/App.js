import React, { Fragment } from "react";
import Menu from "./Menu.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
// maybe the code splitting in index.js messing up routes?

export default function App() {
  return (
    <Fragment>
      <Menu />
      <Main />
      <Footer />
    </Fragment>
  );
}
