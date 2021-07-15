import { CSSProperties, ReactNode, useMemo } from "react";
import { useWindowSize } from "rooks";
import styles from "./style.module.scss";

export type GameWindowProps = {
  children: ReactNode;
};

function GameWindow({ children }: GameWindowProps): JSX.Element {
  const { innerHeight } = useWindowSize();
  const style = useMemo<CSSProperties>(
    () => ({
      height: typeof innerHeight ? `${innerHeight}px` : undefined,
    }),
    [innerHeight]
  );

  return (
    <div className={styles.wrapper} style={style}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
}

export default GameWindow;
