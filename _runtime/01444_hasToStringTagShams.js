// === Module 1444: hasToStringTagShams ===

// Module 1444 (hasToStringTagShams)
import hasSymbols from "hasSymbols" /* 1287 */;


export default function hasToStringTagShams() {
  let toStringTag = hasSymbols();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};