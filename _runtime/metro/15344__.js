// _runtime/metro/15344__.js
import _mod15337 from "15337__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15337(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
