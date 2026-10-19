// _runtime/metro/15096__.js
import _mod15097 from "15097__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod15097) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15097(arg0, arg1);
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
