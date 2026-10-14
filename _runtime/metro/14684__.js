// _runtime/metro/14684__.js
import _mod14685 from "14685__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod14685) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14685(arg0, arg1);
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
