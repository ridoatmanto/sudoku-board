export function CollectColumnNumber() {
  let array: string[][] = [];
  for (let block = 1; block <= 9; block = block + 3) {
    const newColumn = [
      [
        "input-" + block + "-1",
        "input-" + block + "-4",
        "input-" + block + "-7",
        "input-" + (block + 1) + "-1",
        "input-" + (block + 1) + "-4",
        "input-" + (block + 1) + "-7",
        "input-" + (block + 2) + "-1",
        "input-" + (block + 2) + "-4",
        "input-" + (block + 2) + "-7",
      ],
      [
        "input-" + block + "-2",
        "input-" + block + "-5",
        "input-" + block + "-8",
        "input-" + (block + 1) + "-2",
        "input-" + (block + 1) + "-5",
        "input-" + (block + 1) + "-8",
        "input-" + (block + 2) + "-2",
        "input-" + (block + 2) + "-5",
        "input-" + (block + 2) + "-8",
      ],
      [
        "input-" + block + "-3",
        "input-" + block + "-6",
        "input-" + block + "-9",
        "input-" + (block + 1) + "-3",
        "input-" + (block + 1) + "-6",
        "input-" + (block + 1) + "-9",
        "input-" + (block + 2) + "-3",
        "input-" + (block + 2) + "-6",
        "input-" + (block + 2) + "-9",
      ],
    ];

    array = array.concat(newColumn);
  }

  return array;
}
