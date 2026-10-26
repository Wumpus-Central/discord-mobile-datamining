// _runtime/metro/15317__.js
import _mod15318 from "15318__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod15318) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15318(arg0, arg1);
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
