import axios from "axios";
import Episode1, { Episode1Props } from "components/templates/Episode1";
import Episode2 from "components/templates/Episode2";
import { useState } from "react";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

function Page(): JSX.Element {
  const { page } = useParams<{ page: string }>();
  const [textNumber, setTextNumber] = useState<number>();
  const [texts, setTexts] = useState<Episode1Props["texts"]>([]);
  const component = useMemo(() => {
    if (parseInt(page, 10) !== textNumber) {
      return null;
    }

    switch (page) {
      case "1": {
        return <Episode1 texts={texts} />;
      }
      case "2": {
        return <Episode2 texts={texts} />;
      }
      default: {
        return null;
      }
    }
  }, [page, textNumber, texts]);

  useEffect(() => {
    const callback = async () => {
      const { data } = await axios.get(
        `${process.env.PUBLIC_URL}/jsons/${page}.json`
      );

      setTexts(data);
      setTextNumber(parseInt(page, 10));
    };

    callback();
  }, [page]);

  return <>{component}</>;
}

export default Page;
