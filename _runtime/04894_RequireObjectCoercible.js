// === Module 4894: RequireObjectCoercible ===

// Module 4894 (RequireObjectCoercible)
import _mod1281 from "module_1281" /* 1281 */;


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
};