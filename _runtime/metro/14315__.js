// === Module 14315: ? ===

// Module 14315
import _mod14308 from "module_14308" /* 14308 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14308(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};