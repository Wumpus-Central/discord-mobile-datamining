// _runtime/metro/01444__.js
import _mod1287 from "01287__.js";

export default function hasToStringTagShams() {
  let toStringTag = _mod1287();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
}
