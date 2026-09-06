// === Module 14015: SemVer ===

// Module 14015 (SemVer)
import SemVer from "SemVer" /* 14016 */;


export default (arg0, arg1) => {
  if (arg0 instanceof SemVer) {
    return arg0;
  } else {
    try {
      const tmp8 = new SemVer(arg0, arg1);
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