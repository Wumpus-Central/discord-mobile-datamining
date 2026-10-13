// === Module 14646: ? ===

// Module 14646
import _mod14647 from "module_14647" /* 14647 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod14647) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14647(arg0, arg1);
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