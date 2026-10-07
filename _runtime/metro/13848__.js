// _runtime/metro/13848__.js
import _mod13849 from "13849__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod13849) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod13849(arg0, arg1);
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
