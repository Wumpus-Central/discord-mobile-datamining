// _runtime/metro/01463__.js
import _mod1309 from "01309__.js";

export default function hasToStringTagShams() {
  let toStringTag = _mod1309();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
}
