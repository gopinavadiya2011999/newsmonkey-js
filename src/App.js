import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import News from "./components/News";
import NavBar from "./components/NavBar";

export default class App extends Component {
   state = {
    progress:0
  }
  apiKey = process.env.REACT_APP_NEWS_API;

 setProgress = (progress)=>{

    this.setState({
      progress:progress
    })
  }
  //  c ='john';
  render() {

    const pageSize = 5;
    return (
      <div>
        {/* business entertainment general health science sports technology */}

        <BrowserRouter>
          <NavBar />
          <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
          <Routes>
            <Route
              exact
              path="/"
              element={<News  setProgress={this.setProgress} apiKey = {this.apiKey} pageSize={this.pageSize} country="in" category="general" />}
            />

            <Route
              exact
              path="/business"
              element={
                <News  setProgress={this.setProgress} apiKey = {this.apiKey}
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News  setProgress={this.setProgress} apiKey = {this.apiKey}
                  key="entertainment"
                  pageSize={5}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News  setProgress={this.setProgress} apiKey = {this.apiKey}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News  setProgress={this.setProgress} apiKey = {this.apiKey}
                  key="health"
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News  setProgress={this.setProgress} apiKey = {this.apiKey}
                  key="science"
                  pageSize={pageSize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News  setProgress={this.setProgress} apiKey = {this.apiKey}
                  key="sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News  setProgress={this.setProgress} apiKey = {this.apiKey}
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </BrowserRouter>
        {/* Hello my first class based componnents. {this.c} */}
      </div>
    );
  }
}
