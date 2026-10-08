// _runtime/metro/14151__.js
import _mod14152 from "14152__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod14152) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14152(arg0, arg1);
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
