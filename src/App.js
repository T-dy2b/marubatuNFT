import Post from "./components/post/Post";
import { BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Complete from "./Complete";
import Page404 from "./components/Page404";
import "./App.css";
import Header from "./components/Header";
import Playgame from "./components/Playgame";

function App() {
  return (
    <Router>
      <div className="main">
        <Header />
        <Switch>
          <Route exact path="/" >
            <Playgame />
          </Route>
          <Route exact path="/nft">
            <Redirect to="nft-sample" />
          </Route>
          <Route exact path="/nft-sample" >
          <Post />
          </Route>
          <Route path="/complete">
            < Complete />
          </Route>
          <Route path="*" >
          <Page404 />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
