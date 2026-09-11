// === Module 14066: ? ===

// Module 14066
import _mod14067 from "module_14067" /* 14067 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod14067) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14067(arg0, arg1);
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