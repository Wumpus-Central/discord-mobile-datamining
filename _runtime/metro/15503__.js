// _runtime/metro/15503__.js
import _mod15504 from "15504__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod15504) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15504(arg0, arg1);
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
