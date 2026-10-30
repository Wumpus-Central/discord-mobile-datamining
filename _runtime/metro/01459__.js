// _runtime/metro/01459__.js
import _mod1298 from "01298__.js";

export default function hasToStringTagShams() {
  let toStringTag = _mod1298();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
}
