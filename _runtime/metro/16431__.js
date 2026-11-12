// === Module 16431: ? ===

// Module 16431
import _mod16424 from "module_16424" /* 16424 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16424(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};