// _runtime/metro/16238__.js
import _mod16239 from "16239__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod16239) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod16239(arg0, arg1);
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
