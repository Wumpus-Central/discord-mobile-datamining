// === Module 14151: ? ===

// Module 14151
import _mod14152 from "module_14152" /* 14152 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod14152) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14152(arg0, arg1);
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