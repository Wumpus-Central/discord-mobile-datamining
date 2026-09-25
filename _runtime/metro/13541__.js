// _runtime/metro/13541__.js
import _mod13542 from "13542__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod13542) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod13542(arg0, arg1);
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
