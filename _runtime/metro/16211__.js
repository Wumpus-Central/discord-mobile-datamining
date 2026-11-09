// === Module 16211: ? ===

// Module 16211
import _mod16212 from "module_16212" /* 16212 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod16212) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod16212(arg0, arg1);
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