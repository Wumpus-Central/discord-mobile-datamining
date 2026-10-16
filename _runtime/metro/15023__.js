// === Module 15023: ? ===

// Module 15023
import _mod15024 from "module_15024" /* 15024 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod15024) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15024(arg0, arg1);
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