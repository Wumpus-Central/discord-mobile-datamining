// === Module 15296: ? ===

// Module 15296
import _mod15289 from "module_15289" /* 15289 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15289(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};