// === Module 15309: ? ===

// Module 15309
import _mod15310 from "module_15310" /* 15310 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod15310) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15310(arg0, arg1);
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