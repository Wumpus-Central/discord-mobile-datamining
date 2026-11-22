// === Module 15344: ? ===

// Module 15344
import _mod15337 from "module_15337" /* 15337 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15337(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};