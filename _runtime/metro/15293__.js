// _runtime/metro/15293__.js
import _mod15294 from "15294__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod15294) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15294(arg0, arg1);
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
