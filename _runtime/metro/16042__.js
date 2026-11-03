// === Module 16042: ? ===

// Module 16042
import _mod16043 from "module_16043" /* 16043 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod16043) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod16043(arg0, arg1);
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