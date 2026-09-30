// === Module 13754: ? ===

// Module 13754
import _mod13755 from "module_13755" /* 13755 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod13755) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod13755(arg0, arg1);
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