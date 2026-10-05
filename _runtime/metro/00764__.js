// === Module 764: ? ===

// Module 764
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getPossibleEventMessages = function getPossibleEventMessages(message) {
  const items = [];
  if (message.message) {
    items.push(message.message);
  }
  try {
    const iter = message.exception.values[message.exception.values.length - 1];
    let value;
    if (iter != null) {
      value = iter.value;
    }
    if (value) {
      items.push(iter.value);
      if (iter.type) {
        const _HermesInternal = HermesInternal;
        items.push("" + iter.type + ": " + iter.value);
      }
    }
  } catch (err) {
  }
  return items;
};