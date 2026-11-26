// === Module 15503: ? ===

// Module 15503
import _mod15504 from "module_15504" /* 15504 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod15504) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15504(arg0, arg1);
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