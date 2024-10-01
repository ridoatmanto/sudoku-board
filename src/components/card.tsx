import { NumberInput } from "./ui/number-input";
// import React, { useEffect, useRef } from "react";

export function Card({ block }: { block: string }) {
  return (
    <div className="w-full rounded-lg lg:mb-0 border-solid border-2 border-sky-500">
      <div className="p-1 pb-0 grid grid-cols-3">
        {(() => {
          const arr = [];
          for (let i = 1; i <= 9; i++) {
            arr.push(
              <NumberInput indexInput={block + "-" + i} key={Math.random()} />
            );
          }
          return arr;
        })()}
      </div>
    </div>
  );
}
