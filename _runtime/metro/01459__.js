// === Module 1459: ? ===

// Module 1459
import _mod1298 from "module_1298" /* 1298 */;


export default function hasToStringTagShams() {
  let toStringTag = _mod1298();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};