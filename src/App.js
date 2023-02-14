import "./App.css";
import HomeScreen from "./Screen/HomeScreen";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import LoginScreen from "./Screen/LoginScreen";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser, } from "./features/UserSlice";
import ProfileScreen from "./Screen/ProfileScreen"




function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
 useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);


  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (

          <Route>
            <Switch path="/profile">
              <ProfileScreen/>
            </Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Route>



        )}

      </Router>
    </div>
  );
}

export default App;
