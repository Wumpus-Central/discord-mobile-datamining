// === Module 16248: ? ===

// Module 16248
import _mod16241 from "module_16241" /* 16241 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16241(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};