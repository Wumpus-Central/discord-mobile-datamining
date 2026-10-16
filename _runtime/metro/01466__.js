// _runtime/metro/01466__.js
import _mod1312 from "01312__.js";

export default function hasToStringTagShams() {
  let toStringTag = _mod1312();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
}
