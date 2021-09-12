import Home from 'pages/Home';
import Consultacep from 'pages/Consultacep';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/consultacep">
                    <Consultacep />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
