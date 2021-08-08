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
