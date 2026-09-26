// _runtime/metro/01446__.js
import _mod1286 from "01286__.js";

export default function hasToStringTagShams() {
  let toStringTag = _mod1286();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
}
