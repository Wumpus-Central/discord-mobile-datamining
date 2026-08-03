arg5.FormatApproximately = function FormatApproximately(internalSlots, result) {
  result.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return result;
};