// _runtime/05345_RequireObjectCoercible.js
import _mod1293 from "metro/01293__.js";

export default function RequireObjectCoercible(arg0) {
  if (null == arg0) {
    let text = arguments.length > 0;
    const tmp3 = _mod1293;
    if (text) {
      text = arguments[1];
    }
    if (!text) {
      text = `Cannot call method on ${arg0}`;
    }
    const self = this;
    const self2 = this;
    const tmp32 = new tmp3(text);
    throw tmp32;
  } else {
    return arg0;
  }
}
