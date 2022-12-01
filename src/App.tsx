import { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import Register from './pages/Register';
import { userSlice } from './store/reducers/UserReducer';
import { fetchUsers } from './store/reducers/UserReducer/ActionCreators';

function App() {
  return (
    <>
      <Register />
    </>
  );
}

export default App;
