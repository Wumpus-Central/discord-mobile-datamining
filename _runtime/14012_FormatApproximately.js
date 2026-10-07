// === Module 14012: FormatApproximately ===

// Module 14012 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr = arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};