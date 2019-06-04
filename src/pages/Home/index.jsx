import React, { Component } from 'react';

import IntroComponent from './component/Intro';
import ListComponent from './component/List';

export default class HomePage extends Component {
  render () {
    return (
      <div>
        <IntroComponent />
        <ListComponent />
      </div>
    )
  }
}