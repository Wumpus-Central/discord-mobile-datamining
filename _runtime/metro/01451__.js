// _runtime/metro/01451__.js
import _mod1297 from "01297__.js";

export default function hasToStringTagShams() {
  let toStringTag = _mod1297();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
}
