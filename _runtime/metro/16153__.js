// _runtime/metro/16153__.js
import _mod16154 from "16154__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod16154) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod16154(arg0, arg1);
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
