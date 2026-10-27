// _runtime/metro/15354__.js
import _mod15355 from "15355__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod15355) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15355(arg0, arg1);
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
