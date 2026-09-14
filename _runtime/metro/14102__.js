// _runtime/metro/14102__.js
import _mod14103 from "14103__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod14103) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14103(arg0, arg1);
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
