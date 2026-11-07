// === Module 16201: ? ===

// Module 16201
import _mod16202 from "module_16202" /* 16202 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod16202) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod16202(arg0, arg1);
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