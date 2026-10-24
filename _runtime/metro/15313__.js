// _runtime/metro/15313__.js
import _mod15314 from "15314__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod15314) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod15314(arg0, arg1);
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
