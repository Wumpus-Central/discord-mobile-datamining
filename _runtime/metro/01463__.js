// === Module 1463: ? ===

// Module 1463
import _mod1309 from "module_1309" /* 1309 */;


export default function hasToStringTagShams() {
  let toStringTag = _mod1309();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};