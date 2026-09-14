// _runtime/metro/01444__.js
import _mod1285 from "01285__.js";

export default function hasToStringTagShams() {
  let toStringTag = _mod1285();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
}
