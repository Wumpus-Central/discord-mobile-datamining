// === Module 4818: RequireObjectCoercible ===

// Module 4818 (RequireObjectCoercible)
import _mod1283 from "module_1283" /* 1283 */;


export default function RequireObjectCoercible(arg0) {
  if (null == arg0) {
    let text = arguments.length > 0;
    let tmp3 = _mod1283;
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
};