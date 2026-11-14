// _runtime/metro/16517__.js
import _mod16518 from "16518__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod16518) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod16518(arg0, arg1);
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
