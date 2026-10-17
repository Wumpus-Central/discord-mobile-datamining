// === Module 15129: ? ===

// Module 15129
import _mod15122 from "module_15122" /* 15122 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15122(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};