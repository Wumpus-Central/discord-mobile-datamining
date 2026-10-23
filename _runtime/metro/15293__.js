// === Module 15293: ? ===

// Module 15293
import _mod15294 from "module_15294" /* 15294 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod15294) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15294(arg0, arg1);
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