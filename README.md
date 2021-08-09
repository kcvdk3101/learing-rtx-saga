# Redux Saga

## Redux overview

- `Redux` : a library that manage state for Javascript app.
- `Redux middleware` : supply a middleware (software acts as a bridge) stand between **dispatch action** and **send to reducer**.
- `Redux Saga` : is a middleware of Redux library. Using for side-effects management.

## Effect creators

- `Effect` : basically is a Javascript Object (JO) includes information that **saga middleware** know what to do with them
- `Effect creator` : is function return an **Effect**. It does not enforce an Effect but the saga middleware enforces.
- [All Effect creators](https://redux-saga.js.org/docs/api#effect-creators)

## Difference between takeEvery and takeLatest

```tsx
// As many time you click Add Async Saga button, it does as many time.
yield takeEvery(incrementSaga.toString(), handleIncrementSaga);

// As many time click Add Async Saga button, it enforces the latest one.
yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
```

## Difference between fork and spawn

_Note: fork and spawn are non-blocking call_

- `fork` : is used to create **attached forks**
- `spawn` : is used to create **detached forks**
