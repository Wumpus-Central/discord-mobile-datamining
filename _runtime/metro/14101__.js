// _runtime/metro/14101__.js
import _mod14102 from "14102__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod14102) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14102(arg0, arg1);
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
