// === Module 15852: ? ===

// Module 15852
import _mod15845 from "module_15845" /* 15845 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15845(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};