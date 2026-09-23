// _runtime/metro/14371__.js
import _mod14372 from "14372__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod14372) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14372(arg0, arg1);
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
