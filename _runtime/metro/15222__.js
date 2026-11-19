// _runtime/metro/15222__.js
import _mod15223 from "15223__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod15223) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15223(arg0, arg1);
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
