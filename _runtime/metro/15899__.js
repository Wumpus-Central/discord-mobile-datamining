// === Module 15899: ? ===

// Module 15899
import _mod15900 from "module_15900" /* 15900 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod15900) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15900(arg0, arg1);
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