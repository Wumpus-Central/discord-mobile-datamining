// _runtime/14012_FormatApproximately.js

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = {
    type: "approximatelySign",
    value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign,
  };
  arr = arr.push(obj);
  return arr;
};
