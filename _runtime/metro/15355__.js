// === Module 15355: ? ===

// Module 15355
import _mod15348 from "module_15348" /* 15348 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15348(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};