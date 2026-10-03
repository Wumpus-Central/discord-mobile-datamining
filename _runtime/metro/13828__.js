// === Module 13828: ? ===

// Module 13828
import _mod13829 from "module_13829" /* 13829 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod13829) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod13829(arg0, arg1);
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