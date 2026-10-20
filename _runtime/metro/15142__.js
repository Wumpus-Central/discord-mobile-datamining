// _runtime/metro/15142__.js
import _mod15143 from "15143__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod15143) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15143(arg0, arg1);
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
