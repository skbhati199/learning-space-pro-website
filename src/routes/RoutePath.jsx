import { Route, Routes } from "react-router-dom";

import About from "../screens/About";
import Authentication from "./Authentication";
import Authorization from "./Authorization";
import Course from '../screens/Course';
import Home from "../screens/Home";
import Login from "../screens/Login";
import PERMISSIONS from "../permissions/Permissions";
import Profile from "../screens/Profile";
import React from "react";

const RoutePath = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        element={<Authorization permissions={[PERMISSIONS.CAN_VIEW_ABOUT]} />}
      >
        <Route path='about' element={<About />} />
      </Route>
      <Route
        path='profile'
        element={
          <Authentication>
            <Profile />
          </Authentication>
        }
      />
      <Route
        element={<Authorization permissions={[PERMISSIONS.CAN_VIEW_EXTRA]} />}
      >
        <Route path='extra' element={<Course />} />
      </Route>
      <Route path='login' element={<Login />} />
    </Routes>
  );
};

export default RoutePath;
