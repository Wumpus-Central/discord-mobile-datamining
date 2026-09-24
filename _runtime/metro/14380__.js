// _runtime/metro/14380__.js
import _mod14381 from "14381__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod14381) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14381(arg0, arg1);
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
