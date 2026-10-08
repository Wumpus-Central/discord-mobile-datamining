// === Module 5656: RequireObjectCoercible ===

// Module 5656 (RequireObjectCoercible)
import _mod1305 from "module_1305" /* 1305 */;


export default function RequireObjectCoercible(arg0) {
  if (null == arg0) {
    let text = arguments.length > 0;
    if (text) {
      text = arguments[1];
    }
    if (!text) {
      text = `Cannot call method on ${arg0}`;
    }
    const tmp32 = new _mod1305(text);
    throw tmp32;
  } else {
    return arg0;
  }
};