import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';
import Header from './Header';

const Routes = () => (
  <Switch>
    {routes.map(route => (
      <Route
        key={route.index}
        exact={route.exact ? route.exact : false}
        path={route.path}
        component={route.component}
      />
    ))}
  </Switch>
);

const Document = () => (
  <Fragment>
    <Header />
    <Routes />
  </Fragment>
);

export default Document;
