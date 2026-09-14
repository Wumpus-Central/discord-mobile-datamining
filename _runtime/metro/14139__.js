// === Module 14139: ? ===

// Module 14139
import _mod14132 from "module_14132" /* 14132 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14132(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};