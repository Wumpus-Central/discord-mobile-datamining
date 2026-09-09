// _runtime/metro/14041__.js
import _mod14042 from "14042__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod14042) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14042(arg0, arg1);
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
