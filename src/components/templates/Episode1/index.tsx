import GameWindow from "../GameWindow";
import Transition from "../Transition";
import styles from "./style.module.scss";
import MessageWindow, {
  MessageWindowProps,
} from "components/organisms/MessageWindow";

export type Episode1Props = Pick<MessageWindowProps, "texts">;

function Episode1({ texts }: Episode1Props): JSX.Element {
  return (
    <Transition>
      <GameWindow>
        <div className={styles.wrapper}>
          <MessageWindow nextPath="/stories/2" texts={texts} />
        </div>
      </GameWindow>
    </Transition>
  );
}

export default Episode1;
