// === Module 1466: ? ===

// Module 1466
import _mod1312 from "module_1312" /* 1312 */;


export default function hasToStringTagShams() {
  let toStringTag = _mod1312();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};