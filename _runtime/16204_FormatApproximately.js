// === Module 16204: FormatApproximately ===

// Module 16204 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  arr = arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
}