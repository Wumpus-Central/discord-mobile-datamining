// === Module 1044: mergeOutcomes ===

// Module 1044 (mergeOutcomes)
arg5.mergeOutcomes = function mergeOutcomes(_outcomesBuffer, _clearOutcomesResult) {
  const items = [...arguments];
  let map;
  let process;
  map = new Map();
  process = function process(reason) {
    const combined = "" + reason.reason + ":" + reason.category;
    const value = map.get(combined);
    if (value) {
      value.quantity = value.quantity + reason.quantity;
    } else {
      const result = map.set(combined, reason);
    }
  };
  const item = items.forEach((arr) => arr.forEach(process));
  const items1 = [...map.values()];
  return items1;
};