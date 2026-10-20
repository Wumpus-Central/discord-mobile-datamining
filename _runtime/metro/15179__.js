// === Module 15179: ? ===

// Module 15179
import _mod15172 from "module_15172" /* 15172 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15172(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};