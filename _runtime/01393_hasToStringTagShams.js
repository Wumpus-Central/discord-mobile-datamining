// _runtime/01393_hasToStringTagShams.js

export default function hasToStringTagShams() {
  let toStringTag = require(545) /* hasSymbols */();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};