export function CollectDuplicateNumber(arrayNumber: number[]) {
  const duplicates = arrayNumber.filter(
    (item, index) => arrayNumber.indexOf(item) !== index
  );

  return duplicates;
}
