import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page from "./pages/stories/page";
import Pages, { PagesProps } from "./pages";
import { AnimatePresence } from "framer-motion";
import bgm from "./sounds/14941.mp3";
import useSound from "use-sound";
import { useCallback } from "react";

function Containers(): JSX.Element {
  const [play] = useSound(bgm, {
    volume: 0.05,
  });
  const handleStartCallback = useCallback<
    NonNullable<PagesProps["handleStartCallback"]>
  >(() => {
    setTimeout(() => {
      play();
    }, 1000);
  }, [play]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route
        render={({ location }) => {
          const { pathname } = location;

          return (
            <AnimatePresence exitBeforeEnter={true}>
              <Switch key={pathname} location={location}>
                <Route exact={true} path="/">
                  <Pages handleStartCallback={handleStartCallback} />
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
