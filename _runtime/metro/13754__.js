// _runtime/metro/13754__.js
import _mod13755 from "13755__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod13755) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod13755(arg0, arg1);
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
