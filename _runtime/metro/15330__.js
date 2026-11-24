// === Module 15330: ? ===

// Module 15330
import _mod15331 from "module_15331" /* 15331 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod15331) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15331(arg0, arg1);
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