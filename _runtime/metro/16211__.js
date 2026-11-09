// _runtime/metro/16211__.js
import _mod16212 from "16212__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod16212) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod16212(arg0, arg1);
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
