// _runtime/metro/13727__.js
import _mod13728 from "13728__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod13728) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod13728(arg0, arg1);
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
