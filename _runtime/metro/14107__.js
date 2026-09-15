// === Module 14107: ? ===

// Module 14107
import _mod14108 from "module_14108" /* 14108 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod14108) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14108(arg0, arg1);
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