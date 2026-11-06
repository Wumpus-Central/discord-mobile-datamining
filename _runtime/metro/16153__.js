// === Module 16153: ? ===

// Module 16153
import _mod16154 from "module_16154" /* 16154 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod16154) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod16154(arg0, arg1);
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