// === Module 1053: mergeOutcomes ===

// Module 1053 (mergeOutcomes)

export function mergeOutcomes() {
  const items = [...arguments];
  const map = new Map();
  function process(reason) {
    const combined = "" + reason.reason + ":" + reason.category;
    value = map.get(combined);
    if (value) {
      value.quantity = value.quantity + reason.quantity;
    } else {
      const result = map.set(combined, reason);
    }
  }
  const item = items.forEach((arr) => arr.forEach(process));
  const items1 = [...map.values()];
  return items1;
}