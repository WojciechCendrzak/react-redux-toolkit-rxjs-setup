
import { Action, combineReducers } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { createStore } from 'redux';
import { appSlice } from './app.slice';
import { appEpic$ } from './app.epic';

const epicMiddleware = createEpicMiddleware<Action, Action>();

export const store = createStore(
 combineReducers({
    app: appSlice.reducer,
  }),
);

epicMiddleware.run(appEpic$);
