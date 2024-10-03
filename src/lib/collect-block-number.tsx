export function CollectBlockNumber() {
  let array: string[][] = [];
  for (let block = 1; block <= 9; block++) {
    const newBlock = [
      "input-" + block + "-1",
      "input-" + block + "-2",
      "input-" + block + "-3",
      "input-" + block + "-4",
      "input-" + block + "-5",
      "input-" + block + "-6",
      "input-" + block + "-7",
      "input-" + block + "-8",
      "input-" + block + "-9",
    ];

    array.push(newBlock);
  }

  return array;
}
