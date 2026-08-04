// _runtime/00888_getPossibleEventMessages.js
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getPossibleEventMessages = function getPossibleEventMessages(message) {
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