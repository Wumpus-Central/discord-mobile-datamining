// === Module 14090: ? ===

// Module 14090
import _mod14091 from "module_14091" /* 14091 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod14091) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14091(arg0, arg1);
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