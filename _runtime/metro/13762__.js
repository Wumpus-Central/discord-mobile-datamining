// === Module 13762: ? ===

// Module 13762
import _mod13763 from "module_13763" /* 13763 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod13763) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod13763(arg0, arg1);
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