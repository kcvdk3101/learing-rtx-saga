import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import cityApi from 'api/cityApi';
import studentApi from 'api/studentApi';
import { Route, Switch } from 'react-router-dom';

function App() {
  useEffect(() => {
    cityApi.getAll().then((res) => console.log(res));
    studentApi
      .getAllStudents({
        _limit: 15,
        _page: 1,
        _sort: 'mark',
        _order: 'asc',
      })
      .then((res) => console.log(res));
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/login"></Route>
        <Route path="/admin"></Route>
        <Route></Route>
      </Switch>
    </div>
  );
}

export default App;
