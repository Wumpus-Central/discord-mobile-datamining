// _runtime/14012_FormatApproximately.js

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr = arr.push({
    type: "approximatelySign",
    value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign,
  });
  return arr;
};
