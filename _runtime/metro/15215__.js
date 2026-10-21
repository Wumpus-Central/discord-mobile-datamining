// === Module 15215: ? ===

// Module 15215
import _mod15216 from "module_15216" /* 15216 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod15216) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15216(arg0, arg1);
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