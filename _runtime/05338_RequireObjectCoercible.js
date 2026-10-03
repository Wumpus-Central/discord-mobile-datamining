// === Module 5338: RequireObjectCoercible ===

// Module 5338 (RequireObjectCoercible)
import _mod1293 from "module_1293" /* 1293 */;


export default function RequireObjectCoercible(arg0) {
  if (null == arg0) {
    let text = arguments.length > 0;
    if (text) {
      text = arguments[1];
    }
    if (!text) {
      text = `Cannot call method on ${arg0}`;
    }
    const tmp32 = new _mod1293(text);
    throw tmp32;
  } else {
    return arg0;
  }
};