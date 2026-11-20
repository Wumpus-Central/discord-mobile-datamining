// _runtime/metro/01461__.js
import _mod1299 from "01299__.js";

export default function hasToStringTagShams() {
  let toStringTag = _mod1299();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
}
