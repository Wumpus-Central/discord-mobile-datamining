// _runtime/metro/15309__.js
import _mod15310 from "15310__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod15310) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15310(arg0, arg1);
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
