import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { authActions, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  try {
    yield delay(1000);
    localStorage.setItem('access_token', 'token');
    yield put(
      authActions.loginSuccessfully({
        id: 1,
        name: 'Khoi Vuong',
      })
    );
    // redirect to Admin Page
    yield put(push('/admin'));
  } catch (error) {
    yield put(authActions.loginFail(error.message));
  }
}

function* handleLogout() {
  yield delay(1000);
  localStorage.removeItem('access_token');
  // redirect to Login Page
  yield put(push('/login'));
}

// Watch those handle functions
function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
      // Login
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    // Logout
    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
