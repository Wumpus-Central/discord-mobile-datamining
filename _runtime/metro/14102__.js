// === Module 14102: ? ===

// Module 14102
import _mod14103 from "module_14103" /* 14103 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod14103) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14103(arg0, arg1);
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