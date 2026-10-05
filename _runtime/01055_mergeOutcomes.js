// === Module 1055: mergeOutcomes ===

// Module 1055 (mergeOutcomes)
let map;


export const mergeOutcomes = function mergeOutcomes() {
  const items = [...arguments];
  map = new Map();
  function process(reason) {
    const combined = "" + reason.reason + ":" + reason.category;
    const value = map.get(combined);
    if (value) {
      value.quantity = value.quantity + reason.quantity;
    } else {
      const result = map.set(combined, reason);
    }
  }
  const item = items.forEach((arr) => arr.forEach(process));
  const items1 = [...map.values()];
  return items1;
};