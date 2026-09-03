// _runtime/04772_RequireObjectCoercible.js
import _mod538 from "metro/00538__.js";

export default function RequireObjectCoercible(arg0) {
  if (null == arg0) {
    let text = arguments.length > 0;
    let tmp3 = _mod538;
    if (text) {
      text = arguments[1];
    }
    if (!text) {
      text = `Cannot call method on ${arg0}`;
    }
    tmp3 = new tmp3(text);
    throw tmp3;
  } else {
    return arg0;
  }
}
