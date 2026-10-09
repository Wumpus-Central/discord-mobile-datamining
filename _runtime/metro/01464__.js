// _runtime/metro/01464__.js
import _mod1310 from "01310__.js";

export default function hasToStringTagShams() {
  let toStringTag = _mod1310();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
}
