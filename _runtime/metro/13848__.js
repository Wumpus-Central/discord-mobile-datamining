// === Module 13848: ? ===

// Module 13848
import _mod13849 from "module_13849" /* 13849 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod13849) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod13849(arg0, arg1);
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