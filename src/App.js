import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";

import React, { Component } from "react";
import News from "./Components/News";

import { HashRouter, Routes, Route, Link } from "react-router-dom";
export default class App extends Component {
  apiKey = "9bc57b952db64bf69abbed7fa96dcc25";
  render() {
    return (
      <div>
        <HashRouter>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <News
                  key="general"
                  pageSize={6}
                  country="us"
                  apiKey={this.apiKey}
                  category="general"
                />
              }
            />

            <Route
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={6}
                  country="us"
                  apiKey={this.apiKey}
                  category="business"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={6}
                  country="us"
                  apiKey={this.apiKey}
                  category="science"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={6}
                  country="us"
                  apiKey={this.apiKey}
                  category="entertainment"
                />
              }
            />

            <Route
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={6}
                  country="us"
                  apiKey={this.apiKey}
                  category="health"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={6}
                  country="us"
                  apiKey={this.apiKey}
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={6}
                  country="us"
                  apiKey={this.apiKey}
                  category="technology"
                />
              }
            />
          </Routes>
        </HashRouter>
      </div>
    );
  }
}
