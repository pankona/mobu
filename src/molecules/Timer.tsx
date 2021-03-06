import React from "react";

import Text from "../atoms/Text";
import Button from "../atoms/Button";

import "./Timer.css";
import "../atoms/Button.css";

const Timer: React.FunctionComponent<{
  elapsedTime: string;
  iterationCount: number;
  onStartOrPause: (event: React.MouseEvent<HTMLElement>) => void;
  onReset: (event: React.MouseEvent<HTMLElement>) => void;
  disableStartOrPause: boolean;
}> = ({
  elapsedTime,
  iterationCount,
  onStartOrPause,
  onReset,
  disableStartOrPause,
}) => {
  return (
    <>
      <Text>elapsed time: {elapsedTime}</Text>
      <Text>(iteration: {iterationCount})</Text>
      <div className="timer--divider" />
      <Button
        className="button--width-max"
        onClick={onStartOrPause}
        disabled={disableStartOrPause}
      >
        Start/Pause
      </Button>
      <div className="timer--divider" />
      <Button className="button--width-max" onClick={onReset}>
        Reset
      </Button>
    </>
  );
};

export default Timer;
