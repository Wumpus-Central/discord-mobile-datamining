// _runtime/04894_RequireObjectCoercible.js
import _mod1281 from "metro/01281__.js";

export default function RequireObjectCoercible(arg0) {
  if (null == arg0) {
    let text = arguments.length > 0;
    if (text) {
      text = arguments[1];
    }
    if (!text) {
      text = `Cannot call method on ${arg0}`;
    }
    const tmp32 = new _mod1281(text);
    throw tmp32;
  } else {
    return arg0;
  }
}
