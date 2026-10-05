// _runtime/metro/13830__.js
import _mod13831 from "13831__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod13831) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod13831(arg0, arg1);
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
