// _runtime/metro/14120__.js
import _mod14121 from "14121__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod14121) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14121(arg0, arg1);
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
