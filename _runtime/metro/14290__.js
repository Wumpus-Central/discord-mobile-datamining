// === Module 14290: ? ===

// Module 14290
import _mod14291 from "module_14291" /* 14291 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod14291) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14291(arg0, arg1);
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