// _runtime/05657_RequireObjectCoercible.js
import _mod1306 from "metro/01306__.js";

export default function RequireObjectCoercible(arg0) {
  if (null == arg0) {
    let text = arguments.length > 0;
    if (text) {
      text = arguments[1];
    }
    if (!text) {
      text = `Cannot call method on ${arg0}`;
    }
    const tmp32 = new _mod1306(text);
    throw tmp32;
  } else {
    return arg0;
  }
}
