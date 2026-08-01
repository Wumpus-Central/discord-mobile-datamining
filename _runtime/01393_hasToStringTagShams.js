// === Module 1393: hasToStringTagShams ===

// Module 1393 (hasToStringTagShams)

export default function hasToStringTagShams() {
  let toStringTag = require(545) /* hasSymbols */();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};