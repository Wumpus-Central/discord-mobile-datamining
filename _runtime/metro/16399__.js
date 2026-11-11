// _runtime/metro/16399__.js
import _mod16400 from "16400__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod16400) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod16400(arg0, arg1);
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
