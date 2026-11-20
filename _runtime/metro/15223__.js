// _runtime/metro/15223__.js
import _mod15216 from "15216__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15216(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
