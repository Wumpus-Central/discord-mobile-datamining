// === Module 1461: ? ===

// Module 1461
import _mod1299 from "module_1299" /* 1299 */;


export default function hasToStringTagShams() {
  let toStringTag = _mod1299();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};