import { useRef, useState } from "react";
import { useCookies } from "react-cookie";

export function NumberInput({ indexInput }: { indexInput: string }) {
  const [cookies, setCookie] = useCookies(["locked-list"]);
  const OPEN = "open";
  const LOCK = "lock";
  const OPEN_STYLE = "bg-slate-200 text-slate-500 hover:text-white";
  const LOCK_STYLE = "bg-slate-500 text-white";
  const [locked, setLocked] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [currentLabel, setCurrentLabel] = useState(LOCK);
  const [currentStyle, setCurrentStyle] = useState(LOCK_STYLE);

  //LOAD LOCK LIST ON COOKIES prevent reload.

  const handleClick = () => {
    setLocked(!locked);
    let label = currentLabel;
    let inputKey = "input-" + indexInput;
    if (locked == false) {
      label = OPEN;
      setCurrentStyle(OPEN_STYLE);
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
      label = LOCK;
      setCurrentStyle(LOCK_STYLE);

      let current = cookies["locked-list"];
      current = current.filter((v: any) => v !== inputKey);
      setCookie("locked-list", JSON.stringify(current));
    }

    setCurrentLabel(label);
    return true;
  };
  const inputRef = useRef();

  return (
    <div className="max-w-[40px] flex flex-col items-center justify-center">
      {!locked && (
        <input
          type="text"
          ref={inputRef}
          key={"input-" + indexInput}
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
          className="mb-0.5 text-slate-500 p-1 w-10 h-10 text-xl md:text-md font-bold text-center border-1 border-solid border-slate-300 dark:border-slate-500 py-1 px-1 rounded-md"
        />
      )}
      {locked && (
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
