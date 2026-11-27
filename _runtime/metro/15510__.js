// _runtime/metro/15510__.js
import _mod15511 from "15511__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod15511) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15511(arg0, arg1);
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
