// _runtime/metro/15895__.js
import _mod15896 from "15896__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod15896) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15896(arg0, arg1);
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
