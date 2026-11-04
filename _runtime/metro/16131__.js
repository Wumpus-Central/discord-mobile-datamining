// _runtime/metro/16131__.js
import _mod16132 from "16132__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod16132) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod16132(arg0, arg1);
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
