// === Module 1464: ? ===

// Module 1464
import _mod1310 from "module_1310" /* 1310 */;


export default function hasToStringTagShams() {
  let toStringTag = _mod1310();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};