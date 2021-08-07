import Top, { TopProps } from "components/templates/Top";

export type PagesProps = Pick<TopProps, "handleStartCallback">;

function Pages({ handleStartCallback }: PagesProps): JSX.Element {
  return <Top handleStartCallback={handleStartCallback} />;
}

export default Pages;
