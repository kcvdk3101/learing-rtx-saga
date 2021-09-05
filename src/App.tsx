import { Button } from '@material-ui/core';
import cityApi from 'api/cityApi';
import studentApi from 'api/studentApi';
import { useAppDispatch } from 'app/hooks';
import { PageNotFound, PrivateRoute } from 'components/common';
import { AdminLayout } from 'components/layout';
import { authActions } from 'features/auth/authSlice';
import { LoginPage } from 'features/auth/LoginPage';
import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  const dispatch = useAppDispatch();

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
    <>
      <Button variant="contained" color="primary" onClick={() => dispatch(authActions.logout())}>
        Logout
      </Button>
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
    </>
  );
}

export default App;
