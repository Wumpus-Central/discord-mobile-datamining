// === Module 15318: ? ===

// Module 15318
import _mod15319 from "module_15319" /* 15319 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod15319) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15319(arg0, arg1);
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