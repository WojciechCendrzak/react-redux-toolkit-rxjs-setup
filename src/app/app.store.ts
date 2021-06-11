import { Action } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from './app.slice';
import { appEpic$ } from './app.epic';

const epicMiddleware = createEpicMiddleware<Action, Action>();

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
  middleware: [epicMiddleware],
});

epicMiddleware.run(appEpic$);
