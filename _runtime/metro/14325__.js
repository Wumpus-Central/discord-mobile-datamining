// === Module 14325: ? ===

// Module 14325
import _mod14326 from "module_14326" /* 14326 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod14326) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14326(arg0, arg1);
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