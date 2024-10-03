import { NumberInput } from "./ui/number-input";

import { CollectLineNumber } from "../lib/collect-line-number";

export function Card({ block }: { block: string }) {
  const checkDuplicateHorizontally = () => {
    const arrayLine = CollectLineNumber();

    for (let i = 0; i < 9; i++) {
      let copyItems: number[] = [];

      arrayLine[i].forEach((id) => {
        const element = document.getElementById(id) as HTMLInputElement;
        if (parseInt(element.value) > 0) {
          copyItems.push(parseInt(element.value));
        }
      });

      const duplicates = copyItems.filter(
        (item, index) => copyItems.indexOf(item) !== index
      );

      arrayLine[i].forEach((id) => {
        const element = document.getElementById(id) as HTMLInputElement;
        element.style.color = "#64748B";
        if (duplicates.indexOf(parseInt(element.value)) != -1) {
          element.style.color = "red";
        }
      });
    }
  };

  // check vertically duplicates
  // check block duplicates
  // check winner

  return (
    <div className="w-full rounded-lg lg:mb-0 border-solid border-2 border-sky-500">
      <div className="p-1 pb-0 grid grid-cols-3">
        {(() => {
          const arr = [];
          for (let i = 1; i <= 9; i++) {
            arr.push(
              <NumberInput
                indexInput={block + "-" + i}
                key={Math.random()}
                callbackFunction={checkDuplicateHorizontally}
              />
            );
          }
          return arr;
        })()}
      </div>
    </div>
  );
}
