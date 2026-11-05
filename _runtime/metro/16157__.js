// === Module 16157: ? ===

// Module 16157
import _mod16158 from "module_16158" /* 16158 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod16158) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod16158(arg0, arg1);
      return tmp8;
    } catch (tmp10) {
      if (tmp) {
        throw tmp10;
      } else {
        return null;
      }
    }
  }
};