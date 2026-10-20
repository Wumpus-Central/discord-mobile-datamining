// _runtime/metro/15179__.js
import _mod15172 from "15172__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15172(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
