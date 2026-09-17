// === Module 14128: ? ===

// Module 14128
import _mod14129 from "module_14129" /* 14129 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod14129) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14129(arg0, arg1);
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