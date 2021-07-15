import { useState, useRef, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Typewriter from "typewriter-effect";
import styles from "./style.module.scss";

export type MessageWindowProps = {
  nextPath: string;
  texts: string[];
};

function MessageWindow({ nextPath, texts }: MessageWindowProps): JSX.Element {
  const [strings, setStrings] = useState("");
  const [textNumber, setTextNumber] = useState(0);
  const ref = useRef<string>("");
  const history = useHistory();
  const handleNext = useCallback(() => {
    const nextTextNumber = textNumber + 1;

    if (ref.current !== texts[textNumber]) {
      return;
    }

    if (texts.length <= nextTextNumber) {
      history.push(nextPath);

      return;
    }

    ref.current = "";

    setStrings(texts[nextTextNumber]);
    setTextNumber(nextTextNumber);
  }, [history, nextPath, textNumber, texts]);

  useEffect(() => {
    if (!texts.length) {
      return;
    }

    setStrings(texts[0]);
  }, [texts]);

  return (
    <div className={styles.wrapper}>
      <Typewriter
        options={{
          strings,
          autoStart: true,
          delay: 100,
          onCreateTextNode: (character, textNode) => {
            ref.current += character;

            return textNode;
          },
        }}
      />
      <button className={styles.button} onClick={handleNext}>
        ▼
      </button>
    </div>
  );
}

export default MessageWindow;
