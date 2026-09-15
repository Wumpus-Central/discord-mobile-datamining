// _runtime/metro/14107__.js
import _mod14108 from "14108__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod14108) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14108(arg0, arg1);
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
