// === Module 16131: ? ===

// Module 16131
import _mod16132 from "module_16132" /* 16132 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod16132) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod16132(arg0, arg1);
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