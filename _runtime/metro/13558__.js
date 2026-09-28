// _runtime/metro/13558__.js
import _mod13559 from "13559__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod13559) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod13559(arg0, arg1);
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
