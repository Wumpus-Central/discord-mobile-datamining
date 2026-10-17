// _runtime/metro/15092__.js
import _mod15093 from "15093__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod15093) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15093(arg0, arg1);
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
