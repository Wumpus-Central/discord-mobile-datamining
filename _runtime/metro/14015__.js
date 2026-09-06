// _runtime/metro/14015__.js
import _mod14016 from "14016__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod14016) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14016(arg0, arg1);
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
