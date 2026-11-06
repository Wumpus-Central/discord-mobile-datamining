// === Module 16190: ? ===

// Module 16190
import _mod16183 from "module_16183" /* 16183 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16183(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};