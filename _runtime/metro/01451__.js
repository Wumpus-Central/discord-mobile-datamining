// === Module 1451: ? ===

// Module 1451
import _mod1297 from "module_1297" /* 1297 */;


export default function hasToStringTagShams() {
  let toStringTag = _mod1297();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};