import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page from "./pages/stories/page";
import Pages from "./pages";
import { AnimatePresence } from "framer-motion";

function Containers(): JSX.Element {
  return (
    <Router>
      <Route
        render={({ location }) => {
          const { pathname } = location;

          return (
            <AnimatePresence exitBeforeEnter={true}>
              <Switch key={pathname} location={location}>
                <Route exact={true} path="/">
                  <Pages />
                </Route>
                <Route exact={true} path="/stories/:page">
                  <Page />
                </Route>
              </Switch>
            </AnimatePresence>
          );
        }}
      />
    </Router>
  );
}

export default Containers;
