// === Module 16517: ? ===

// Module 16517
import _mod16518 from "module_16518" /* 16518 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod16518) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod16518(arg0, arg1);
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