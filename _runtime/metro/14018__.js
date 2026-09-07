// _runtime/metro/14018__.js
import _mod14019 from "14019__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod14019) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14019(arg0, arg1);
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
