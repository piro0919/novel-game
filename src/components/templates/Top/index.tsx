import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import GameWindow from "../GameWindow";
import Transition from "../Transition";
import styles from "./style.module.scss";

function Top(): JSX.Element {
  const history = useHistory();
  const handleStart = useCallback(() => {
    history.push("/stories/1");
  }, [history]);

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
