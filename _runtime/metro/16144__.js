// _runtime/metro/16144__.js
import _mod16145 from "16145__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod16145) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod16145(arg0, arg1);
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
