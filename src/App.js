import React from "react";
import "./styles.css";

const CountDownTimer = () => {
  const [hour, setHour] = React.useState();
  const [minute, setMinute] = React.useState();
  const [second, setSecond] = React.useState();
  const [secondsUntilEnd, setSecondsUntilEnd] = React.useState(0);
  const [hasStarted, setHasStarted] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);
  const [isReset, setIsReset] = React.useState(false);

  React.useEffect(() => {
    let intervalID = null;
    if (hasStarted && secondsUntilEnd > 0 && !isPaused) {
      intervalID = setInterval(() => {
        setSecondsUntilEnd(secondsUntilEnd - 1);
        console.log("This will run every second!", secondsUntilEnd);
      }, 1000);
    }

    if (hasStarted && secondsUntilEnd === 0) {
      alert("Time has reached!");
    }

    // clean up
    return () => {
      clearInterval(intervalID);
      // interval ID
    };
  }, [secondsUntilEnd, hasStarted, isPaused]);

  const handleStartOnClick = React.useCallback(() => {
    let formattedHour = hour || 0;
    let formattedMinute = minute || 0;
    let formattedSeconds = second || 0;

    if (
      isNaN(formattedHour) ||
      isNaN(formattedMinute) ||
      isNaN(formattedSeconds)
    ) {
      console.log(formattedHour, formattedMinute, formattedSeconds);
      alert("Only accept number for time");
      return;
    }
    let inputTime =
      formattedHour * 3600 + formattedMinute * 60 + formattedSeconds;
    setHasStarted(true);
    if (!isPaused) {
      setSecondsUntilEnd(inputTime);
    }
    setIsPaused(false);
    setIsReset(false);
  }, [hour, minute, second, isPaused]);

  const handlePauseOnClick = () => {
    setIsPaused(true);
  };

  const handleResetOnClick = () => {
    setIsReset(true);
    setHour();
    setMinute();
    setSecond();
    setSecondsUntilEnd(0);
    setIsPaused(false);
    setHasStarted(false);
  };

  const handleOnChange = (event) => {
    const { value, name } = event.target;
    switch (name) {
      case "hours":
        setHour(value);
        break;
      case "minutes":
        setMinute(value);
        break;
      case "seconds":
        setSecond(value);
        break;
      default:
        break;
    }
  };

  // Create show input timer
  const ShowInputTimer = () => {
    return (
      <div>
        <input
          name="hours"
          aria-label="hours"
          placeholder="HH"
          type="text"
          value={hour}
          onChange={handleOnChange}
        />
        <input
          name="minutes"
          aria-label="minutes"
          placeholder="MM"
          type="text"
          value={minute}
          onChange={handleOnChange}
        />
        <input
          name="seconds"
          aria-label="seconds"
          placeholder="SS"
          type="text"
          value={second}
          onChange={handleOnChange}
        />
      </div>
    );
  };

  const ShowTimerText = () => {
    const hourDisplay = secondsUntilEnd / 60 / 60;
    const minuteDisplay = (hourDisplay - Math.floor(hourDisplay)) * 60;
    const secondDisplay = (minuteDisplay - Math.floor(minuteDisplay)) * 60;
    const formattedHourDisplay = String(Math.floor(hourDisplay)).padStart(2, 0);
    const formattedMinutesDisplay = String(Math.floor(minuteDisplay)).padStart(
      2,
      0
    );
    const formattedSecondsDisplay = String(Math.round(secondDisplay)).padStart(
      2,
      0
    );

    return (
      <div>
        {formattedHourDisplay} : {formattedMinutesDisplay} :{" "}
        {formattedSecondsDisplay}
      </div>
    );
  };

  const StartButton = () => {
    return (
      <button
        aria-label="startButton"
        name="startbutton"
        onClick={handleStartOnClick}
        disabled={
          hour === undefined && minute === undefined && second === undefined
        }
      >
        Start
      </button>
    );
  };

  const PauseButton = () => {
    return (
      <button
        aria-label="pauseButton"
        name="pauseButton"
        onClick={handlePauseOnClick}
      >
        Pause
      </button>
    );
  };

  const ResetButton = () => {
    return (
      <button
        aria-label="resetButton"
        name="resetButton"
        onClick={handleResetOnClick}
      >
        Reset
      </button>
    );
  };

  return (
    <div>
      {hasStarted && !isReset ? (
        <div>
          <ShowTimerText />
          {isPaused ? <StartButton /> : <PauseButton />}
          <ResetButton />
        </div>
      ) : (
        <div>
          <ShowInputTimer />
          <StartButton />
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <CountDownTimer />
    </div>
  );
}
