// _runtime/metro/15272__.js
import _mod15273 from "15273__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod15273) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15273(arg0, arg1);
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
