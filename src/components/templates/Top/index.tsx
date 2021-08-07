import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import GameWindow from "../GameWindow";
import Transition from "../Transition";
import styles from "./style.module.scss";

export type TopProps = {
  handleStartCallback?: () => void;
};

function Top({ handleStartCallback }: TopProps): JSX.Element {
  const history = useHistory();
  const handleStart = useCallback(() => {
    history.push("/stories/1");

    if (!handleStartCallback) {
      return;
    }

    handleStartCallback();
  }, [handleStartCallback, history]);

  return (
    <Transition>
      <GameWindow>
        <div className={styles.wrapper}>
          <div className={styles.buttonsWrapper}>
            <button className={styles.button} onClick={handleStart}>
              NEW GAME
            </button>
            <button className={styles.button}>LOAD GAME</button>
            <button className={styles.button}>CONFIG</button>
          </div>
        </div>
      </GameWindow>
    </Transition>
  );
}

export default Top;
