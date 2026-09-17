// _runtime/metro/14128__.js
import _mod14129 from "14129__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod14129) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14129(arg0, arg1);
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
