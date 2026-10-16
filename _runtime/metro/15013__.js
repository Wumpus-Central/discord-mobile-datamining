// === Module 15013: ? ===

// Module 15013
import _mod15014 from "module_15014" /* 15014 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod15014) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15014(arg0, arg1);
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