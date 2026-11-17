// === Module 16553: ? ===

// Module 16553
import _mod16554 from "module_16554" /* 16554 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod16554) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod16554(arg0, arg1);
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