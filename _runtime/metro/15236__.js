// _runtime/metro/15236__.js
import _mod15237 from "15237__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod15237) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15237(arg0, arg1);
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
