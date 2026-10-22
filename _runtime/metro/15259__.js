// === Module 15259: ? ===

// Module 15259
import _mod15260 from "module_15260" /* 15260 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod15260) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15260(arg0, arg1);
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