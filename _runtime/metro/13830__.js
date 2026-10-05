// === Module 13830: ? ===

// Module 13830
import _mod13831 from "module_13831" /* 13831 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod13831) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod13831(arg0, arg1);
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