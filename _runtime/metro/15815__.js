// _runtime/metro/15815__.js
import _mod15816 from "15816__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod15816) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15816(arg0, arg1);
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
