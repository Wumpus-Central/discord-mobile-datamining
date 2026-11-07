// _runtime/metro/16201__.js
import _mod16202 from "16202__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod16202) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod16202(arg0, arg1);
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
