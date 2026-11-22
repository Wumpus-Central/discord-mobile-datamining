// === Module 15307: ? ===

// Module 15307
import _mod15308 from "module_15308" /* 15308 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod15308) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15308(arg0, arg1);
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