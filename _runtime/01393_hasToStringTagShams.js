// _runtime/01393_hasToStringTagShams.js
import { hasSymbols } from "00545_hasSymbols.js";

export default function hasToStringTagShams() {
  let toStringTag = hasSymbols();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};