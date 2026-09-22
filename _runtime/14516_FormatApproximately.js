// === Module 14516: FormatApproximately ===

// Module 14516 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr = arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};