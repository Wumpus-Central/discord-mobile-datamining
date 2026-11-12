// === Module 16394: ? ===

// Module 16394
import _mod16395 from "module_16395" /* 16395 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod16395) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod16395(arg0, arg1);
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