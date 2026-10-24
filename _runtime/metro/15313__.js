// === Module 15313: ? ===

// Module 15313
import _mod15314 from "module_15314" /* 15314 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod15314) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15314(arg0, arg1);
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