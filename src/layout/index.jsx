import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import routerData from './../routerConfig';

export default class Layout extends Component {


  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <Header />
        <Switch>
          {routerData.map((item, index) => {
            return item.component ? (
              <Route
                key={index}
                path={item.path}
                component={item.component}
              />
            ) : null;
          })}
        </Switch>
        <Footer />
      </div>
    );
  }
}
