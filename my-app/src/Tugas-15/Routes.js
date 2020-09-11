import React from "react";

import DaftarBuahContext from "./../Tugas-14/DaftarBuah.js";
import DaftarBuah from "../Tugas-13/DaftarBuah.js";
import TabelFruit from "../Tugas-12/TabelFruit.js";
import Clock from "../Tugas-11/Clock.js";
import TableProps from "../Tugas-10/tugas10.js";
import Table from "../Tugas-9/tugas9.js";
import { Switch, Route } from "react-router-dom";
import Home from "./Home.js";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <DaftarBuahContext />
      </Route>

      <Route exact path="/table">
        <Table />
      </Route>
      <Route exact path="/table-props">
        <TableProps />
      </Route>
      <Route exact path="/clock">
        <Clock />
      </Route>
      <Route exact path="/table-fruit">
        <TabelFruit />
      </Route>
      <Route exact path="/daftar-buah">
        <DaftarBuah />
      </Route>
      <Route exact path="/daftar-buah-context">
        <DaftarBuahContext />
      </Route>
    </Switch>
  );
};

export default Routes;
