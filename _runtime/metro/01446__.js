// === Module 1446: ? ===

// Module 1446
import _mod1286 from "module_1286" /* 1286 */;


export default function hasToStringTagShams() {
  let toStringTag = _mod1286();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};