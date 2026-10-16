// _runtime/metro/15023__.js
import _mod15024 from "15024__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod15024) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15024(arg0, arg1);
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
