// _runtime/metro/15259__.js
import _mod15260 from "15260__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod15260) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15260(arg0, arg1);
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
