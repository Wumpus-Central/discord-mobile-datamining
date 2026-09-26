// _runtime/metro/13559__.js
import _mod13560 from "13560__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod13560) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod13560(arg0, arg1);
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
