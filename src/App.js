import React, { memo, Suspense } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import { Home } from './components/splitting';

function App() {
  return (
    <Suspense fallback={<SuspenseLoader/>}>
      <div className="App">
        <Switch>
          <Route exact path={'/'} component={Home}/>
          {/*<Route path={'/event'} component={Events}/>*/}
        </Switch>
      </div>
    </Suspense>
  );
}

const SuspenseLoader = memo(() => {
  return (<LinearProgress/>);
});

export default App;
