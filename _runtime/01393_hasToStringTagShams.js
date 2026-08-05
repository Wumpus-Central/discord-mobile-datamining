// _runtime/01393_hasToStringTagShams.js

export default function hasToStringTagShams() {
  let toStringTag = require("00545_hasSymbols.js") /* hasSymbols */();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};