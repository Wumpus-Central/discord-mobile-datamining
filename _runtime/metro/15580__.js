// === Module 15580: ? ===

// Module 15580
import _mod15581 from "module_15581" /* 15581 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod15581) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15581(arg0, arg1);
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