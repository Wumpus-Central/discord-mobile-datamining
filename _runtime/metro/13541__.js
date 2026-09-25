// === Module 13541: ? ===

// Module 13541
import _mod13542 from "module_13542" /* 13542 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod13542) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod13542(arg0, arg1);
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