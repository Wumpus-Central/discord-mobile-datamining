// === Module 14223: ? ===

// Module 14223
import _mod14224 from "module_14224" /* 14224 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod14224) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14224(arg0, arg1);
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