import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import Home from "./routes/Home";
import Friends from "./routes/Friends";
import Projects from "./routes/Projects";

render(
    () => (
        <Router>
            <Route path="/" component={Home} />
            <Route path="/friends" component={Friends} />
            <Route path="/projects" component={Projects} />
        </Router>
    ),
    document.getElementById("root")
);