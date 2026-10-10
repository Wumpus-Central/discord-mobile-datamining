// _runtime/metro/14302__.js
import _mod14303 from "14303__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod14303) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14303(arg0, arg1);
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
