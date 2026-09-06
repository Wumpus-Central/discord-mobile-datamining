// === Module 753: ? ===

// Module 753
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const getPossibleEventMessages = function getPossibleEventMessages(message) {
  const items = [];
  if (message.message) {
    items.push(message.message);
  }
  try {
    const iter = message.exception.values[message.exception.values.length - 1];
    value = undefined;
    if (iter != null) {
      value = iter.value;
    }
    if (value) {
      items.push(iter2.value);
      if (iter2.type) {
        const _HermesInternal = HermesInternal;
        items.push("" + iter.type + ": " + iter.value);
      }
    }
    return items;
  } catch (err) {
  }
};