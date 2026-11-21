// === Module 15471: FormatApproximately ===

// Module 15471 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  arr = arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
}