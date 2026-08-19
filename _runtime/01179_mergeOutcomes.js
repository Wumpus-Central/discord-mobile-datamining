// _runtime/01179_mergeOutcomes.js
arg5.mergeOutcomes = function mergeOutcomes(_outcomesBuffer, _clearOutcomesResult) {
  const items = [...arguments];
  const map = new Map();
  function process(reason) {
    const combined = "" + reason.reason + ":" + reason.category;
    const value = map.get(combined);
    if (value) {
      value.quantity = value.quantity + reason.quantity;
    } else {
      const result = map.set(combined, reason);
    }
  }
  const item = items.forEach((item, index) => item.forEach(process));
  const items1 = [...map.values()];
  return items1;
};