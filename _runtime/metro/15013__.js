// _runtime/metro/15013__.js
import _mod15014 from "15014__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod15014) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15014(arg0, arg1);
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
