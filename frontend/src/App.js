import TopMenu from "./components/TopMenu";
import Home from "./components/Screen/Home"
import SingleScreen from "./components/Screen/SingleScreen";
import CreateScreen from "./components/Screen/CreateScreen";
import Login from "./components/Screen/Login";
import Register from "./components/Screen/Register";
import ContactUs from "./components/Screen/ContactUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const user = true;
  return (



    <Router>  


   <TopMenu/>

     <Switch>
          <Route  exact path="/"><Home /></Route>
          <Route  path="/contactus"><ContactUs /> </Route>
          <Route  path="/register"><Register /> </Route>
          <Route  path="/login"> <Login /></Route>
          <Route  path="/createscreen">  {user ? <CreateScreen /> :<Register />}</Route>
          <Route  path="/cartdata/:cartdataId"><SingleScreen /></Route>
     </Switch>
    
   
   </Router>
  );
}

export default App;
