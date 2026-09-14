// === Module 1444: ? ===

// Module 1444
import _mod1285 from "module_1285" /* 1285 */;


export default function hasToStringTagShams() {
  let toStringTag = _mod1285();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};