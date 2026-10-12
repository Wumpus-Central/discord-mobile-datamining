// _runtime/metro/14325__.js
import _mod14326 from "14326__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod14326) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14326(arg0, arg1);
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
