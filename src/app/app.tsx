import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { appSlice } from './app.slice';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appSlice.actions.ping());
  }, [dispatch]);

  return <div>Ping pong setup</div>;
};
