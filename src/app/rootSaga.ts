import counterSaga from 'features/counter/counterSaga';
import { all } from 'redux-saga/effects';

function* helloSaga() {
  console.log('Hello Saga');
}

export default function* rootSaga() {
  yield all([helloSaga(), counterSaga()]);
}
