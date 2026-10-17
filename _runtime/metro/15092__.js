// === Module 15092: ? ===

// Module 15092
import _mod15093 from "module_15093" /* 15093 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod15093) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15093(arg0, arg1);
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