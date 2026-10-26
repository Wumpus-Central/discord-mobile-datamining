// === Module 15317: ? ===

// Module 15317
import _mod15318 from "module_15318" /* 15318 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod15318) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15318(arg0, arg1);
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