// === Module 15096: ? ===

// Module 15096
import _mod15097 from "module_15097" /* 15097 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod15097) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15097(arg0, arg1);
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