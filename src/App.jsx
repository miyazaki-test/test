//import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
//const App = () => {
export const App = () => {
  //return null;
  console.log("レンダリング2");
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    //alert();
    //setNum(num + 1);
    setNum((prev) => prev + 1);
  };

  useEffect(() => {
    alert();
  }, [num]);

  return (
    //  <div>
    //    <Fragment>
    <>
      {/*console.log("test")*/}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
    //    </Fragment>
    //</div>
  );
};
