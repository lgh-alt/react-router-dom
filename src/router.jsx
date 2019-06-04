/**
 * 定义应用路由
 */
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Layout from './layout';

const router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </HashRouter>
  );
};

export default router();
