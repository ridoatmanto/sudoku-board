import { useState } from "react";
import { useCookies } from "react-cookie";

export function NumberInput({
  indexInput,
  callbackFunction,
}: {
  indexInput: string;
  callbackFunction: any;
}) {
  const [cookies, setCookie] = useCookies(["locked-list"]);
  const OPEN = "open";
  const LOCK = "lock";
  const OPEN_STYLE = "bg-slate-200 text-slate-500 hover:text-white";
  const LOCK_STYLE = "bg-slate-500 text-white";
  const [currentValue, setCurrentValue] = useState("");
  const [currentLabel, setCurrentLabel] = useState(LOCK);
  const [currentStyle, setCurrentStyle] = useState(LOCK_STYLE);
  const [visible, setVisible] = useState("");

  //LOAD LOCK LIST ON COOKIES prevent reload.

  const handleClick = () => {
    if (currentValue === "" || currentValue === undefined) {
      alert("Please fill input first!");
      return false;
    }

    let inputKey = "input-" + indexInput;
    if (visible === "") {
      setCurrentLabel(OPEN);
      setCurrentStyle(OPEN_STYLE);
      setVisible("collapse");

      if (
        cookies["locked-list"] === "" ||
        cookies["locked-list"] === undefined
      ) {
        setCookie("locked-list", JSON.stringify([inputKey]));
      } else {
        let array = cookies["locked-list"];
        array.push(inputKey);
        setCookie("locked-list", JSON.stringify(array));
      }
    } else {
      setCurrentLabel(LOCK);
      setCurrentStyle(LOCK_STYLE);
      setVisible("");

      let current = cookies["locked-list"];
      current = current.filter((v: any) => v !== inputKey);
      setCookie("locked-list", JSON.stringify(current));
    }

    return true;
  };

  const onChangeAction = (event: any) => {
    if (!/[1-9]/.test(event.target.value) && event.target.value != "") {
      alert("Only accept number 1 to 9!");
      return false;
    }

    setCurrentValue(event.target.value);
    callbackFunction();
  };

  return (
    <div className="max-w-[40px] flex flex-col items-center justify-center">
      <input
        type="text"
        id={"input-" + indexInput}
        key={"input-" + indexInput}
        value={currentValue}
        onChange={(e) => onChangeAction(e)}
        className={
          visible +
          " mb-0.5 text-slate-500 p-1 w-10 h-10 text-xl md:text-md font-bold text-center border-1 border-solid border-slate-300 dark:border-slate-500 py-1 px-1 rounded-md"
        }
      />
      {visible != "" && (
        <h2 className="mb-0.5 text-slate-500 pt-2 pb-1 px-1 w-10 h-10 text-xl md:text-md font-bold text-center border-1 border-solid border-slate-300 dark:border-slate-500 py-1 px-1 rounded-md">
          {currentValue}
        </h2>
      )}
      <br />
      <button
        onClick={() => handleClick()}
        className={
          currentStyle +
          " border-1 border-slate-500 hover:bg-slate-400 rounded-lg px-1.5 py-0 text-xs mb-1"
        }
      >
        {currentLabel}
      </button>
    </div>
  );
}
