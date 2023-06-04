import React, { useEffect } from "react";
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import Loign from "./components/login/Loign";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { auth } from "./firebase";
import { login, logout } from "./features/UserSlice";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./utils/ErrorFallBack";


function App() {
  const user = useAppSelector((state) => state.user.user)
  // console.log(user);

  const dispatch = useAppDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((loginUser)=>{
      // console.log(loginUser);
      if(loginUser){
        dispatch(login({
          uid:loginUser.uid,
          photo:loginUser.photoURL,
          email: loginUser.email,
          displayName: loginUser.displayName
        }))
      }else{
        dispatch(logout())
      }
    })
  }, [dispatch])
  
  
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
          <Loign />
        </>
      )}
    </div>
  );
}

export default App;
