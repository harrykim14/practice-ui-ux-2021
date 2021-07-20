import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import home from '../pages/home';
import abstract from '../pages/abstract';
import onestroke from '../pages/onestroke';
import threed from '../pages/threed';
import neumorphism from '../pages/neumorphism';
import terazzo from '../pages/terazzo';
import shadow from '../pages/shadow';
import doubletone from '../pages/doubletone';

const Root: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={home} />
            <Route path="/abstract" exact component={abstract} />
            <Route path="/onestroke" exact component={onestroke} />
            <Route path="/threed" exact component={threed} />
            <Route path="/neumorphism" exact component={neumorphism} />
            <Route path="/terazzo" exact component={terazzo} />
            <Route path="/shadow" exact component={shadow} />
            <Route path="/doubletone" exact component={doubletone} />
            <Redirect path="*" to="/" />
        </Switch>
    </BrowserRouter>
)

export default Root;