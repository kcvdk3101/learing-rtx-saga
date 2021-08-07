import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from 'redux-saga/effects';
import { increment } from './counterSlice';

export function* logAction(action: PayloadAction) {
  console.log('Log', action);
}

export default function* counterSaga() {
  yield takeEvery(increment().type, logAction);
}
