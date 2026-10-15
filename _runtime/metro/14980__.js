// _runtime/metro/14980__.js
import _mod14981 from "14981__.js";

export default (arg0, arg1) => {
  if (arg0 instanceof _mod14981) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14981(arg0, arg1);
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
