// _runtime/01451_hasToStringTagShams.js
import hasSymbols from "01297_hasSymbols.js";

export default function hasToStringTagShams() {
  let toStringTag = hasSymbols();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
}
