import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Route as RouteType } from "Typings/route";
import routes from "./route";

const App: FC<{}> = () => {
    return (
        <Router>
            <Switch>
                {routes &&
                    routes.map((r: RouteType) => (
                        <Route
                            exact={r.isExact}
                            path={r.path}
                            key={r.key}
                            component={r.component}
                        />
                    ))}
            </Switch>
        </Router>
    );
};

export default App;
