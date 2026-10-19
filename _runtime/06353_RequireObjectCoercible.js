// _runtime/06353_RequireObjectCoercible.js
import _mod1308 from "metro/01308__.js";

export default function RequireObjectCoercible(arg0) {
  if (null == arg0) {
    let text = arguments.length > 0;
    if (text) {
      text = arguments[1];
    }
    if (!text) {
      text = `Cannot call method on ${arg0}`;
    }
    const tmp32 = new _mod1308(text);
    throw tmp32;
  } else {
    return arg0;
  }
}
