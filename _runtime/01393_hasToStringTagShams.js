import { hasSymbols } from "00545_hasSymbols.js";
// _runtime/01393_hasToStringTagShams.js

export default function hasToStringTagShams() {
  let toStringTag = hasSymbols /* hasSymbols */();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};