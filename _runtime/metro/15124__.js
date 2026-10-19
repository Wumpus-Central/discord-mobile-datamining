// === Module 15124: ? ===

// Module 15124
import _mod15125 from "module_15125" /* 15125 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod15125) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15125(arg0, arg1);
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