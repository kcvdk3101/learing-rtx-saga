import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery } from 'redux-saga/effects';
import { incrementSaga, incrementSagaSuccessfully } from './counterSlice';

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('Starting count');
  yield delay(1000);
  console.log('Waiting done, dispatch', action.payload);
  yield put(incrementSagaSuccessfully(action.payload));
}

export default function* counterSaga() {
  // As many time you click Add Async Saga button, it does as many time.
  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);

  // As many time click Add Async Saga button, it enforces the latest one.
  //yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
