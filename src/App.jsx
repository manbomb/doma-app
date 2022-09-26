import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from '../src/pages/home/Home';
import Login from '../src/pages/login/Login';

function App() {
    return <Router>
        <Switch>
            <Route path={"/"} exact>
                <Home />
            </Route>
            <Route path={"/login"}>
                <Login />
            </Route>
        </Switch>
    </Router>;
}

export default App;
