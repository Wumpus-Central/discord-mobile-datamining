// === Module 15223: ? ===

// Module 15223
import _mod15216 from "module_15216" /* 15216 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15216(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};