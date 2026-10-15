// === Module 14980: ? ===

// Module 14980
import _mod14981 from "module_14981" /* 14981 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod14981) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14981(arg0, arg1);
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