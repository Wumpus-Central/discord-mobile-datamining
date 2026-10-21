// _runtime/metro/15215__.js
import _mod15216 from "15216__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod15216) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15216(arg0, arg1);
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
