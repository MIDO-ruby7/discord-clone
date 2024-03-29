import React, { useEffect } from 'react';
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from './components/chat/Chat';
import { useSelector } from 'react-redux';
import Login from './components/login/Login';
import { useAppSelector, useAppDispatct } from './app/hooks';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './utils/ErrorFallback';

function App() {

  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatct();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if(loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    })
  },[dispatch]);

  return (
    <div className="App">
      {user ? (
        <>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Sidebar />
        </ErrorBoundary>
          <Chat />
        </>
      ) : (
        <>
        <Login />
        </>
      )}
    </div>
  );
}

export default App;
