// === Module 16238: ? ===

// Module 16238
import _mod16239 from "module_16239" /* 16239 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod16239) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod16239(arg0, arg1);
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