// _runtime/metro/14284__.js
import _mod14285 from "14285__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod14285) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14285(arg0, arg1);
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
