import GameWindow from "../GameWindow";
import Transition from "../Transition";
import styles from "./style.module.scss";
import MessageWindow, {
  MessageWindowProps,
} from "components/organisms/MessageWindow";

export type Episode2Props = Pick<MessageWindowProps, "texts">;

function Episode2({ texts }: Episode2Props): JSX.Element {
  return (
    <Transition>
      <GameWindow>
        <div className={styles.wrapper}>
          <MessageWindow nextPath="/" texts={texts} />
        </div>
      </GameWindow>
    </Transition>
  );
}

export default Episode2;
