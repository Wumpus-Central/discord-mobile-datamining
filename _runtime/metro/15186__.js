// === Module 15186: ? ===

// Module 15186
import _mod15187 from "module_15187" /* 15187 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod15187) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15187(arg0, arg1);
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