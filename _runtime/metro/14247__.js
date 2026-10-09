// _runtime/metro/14247__.js
import _mod14248 from "14248__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod14248) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14248(arg0, arg1);
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
