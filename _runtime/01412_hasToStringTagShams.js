// === Module 1412: hasToStringTagShams ===

// Module 1412 (hasToStringTagShams)
import hasSymbols from "hasSymbols" /* 545 */;


export default function hasToStringTagShams() {
  let toStringTag = hasSymbols();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};