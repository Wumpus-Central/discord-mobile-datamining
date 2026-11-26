// === Module 1462: ? ===

// Module 1462
import _mod1300 from "module_1300" /* 1300 */;


export default function hasToStringTagShams() {
  let toStringTag = _mod1300();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};