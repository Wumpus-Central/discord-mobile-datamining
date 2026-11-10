// === Module 16275: ? ===

// Module 16275
import _mod16268 from "module_16268" /* 16268 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16268(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};