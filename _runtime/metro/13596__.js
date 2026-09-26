// _runtime/metro/13596__.js
import _mod13589 from "13589__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod13589(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
