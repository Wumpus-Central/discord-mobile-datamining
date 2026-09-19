// === Module 14278: ? ===

// Module 14278
import _mod14279 from "module_14279" /* 14279 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod14279) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14279(arg0, arg1);
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