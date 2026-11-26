// _runtime/metro/01462__.js
import _mod1300 from "01300__.js";

export default function hasToStringTagShams() {
  let toStringTag = _mod1300();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
}
