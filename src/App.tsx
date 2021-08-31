import cityApi from 'api/cityApi';
import studentApi from 'api/studentApi';
import { PageNotFound, PrivateRoute } from 'components/common';
import { AdminLayout } from 'components/layout';
import { LoginPage } from 'features/auth/LoginPage';
import React, { useEffect } from 'react';
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
        <Route path="/login">
          <LoginPage />
        </Route>

        <PrivateRoute path="/admin">
          <AdminLayout />
        </PrivateRoute>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
