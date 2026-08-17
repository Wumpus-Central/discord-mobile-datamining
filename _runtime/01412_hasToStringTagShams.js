// _runtime/01412_hasToStringTagShams.js
import hasSymbols from "hasSymbols" /* 545 */;


export default function hasToStringTagShams() {
  let toStringTag = hasSymbols();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};