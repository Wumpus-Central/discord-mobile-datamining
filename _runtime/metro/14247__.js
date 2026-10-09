// === Module 14247: ? ===

// Module 14247
import _mod14248 from "module_14248" /* 14248 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod14248) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14248(arg0, arg1);
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