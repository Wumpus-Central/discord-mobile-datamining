// === Module 1407: hasToStringTagShams ===

// Module 1407 (hasToStringTagShams)
import hasSymbols from "hasSymbols" /* 542 */;


export default function hasToStringTagShams() {
  let toStringTag = hasSymbols();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};