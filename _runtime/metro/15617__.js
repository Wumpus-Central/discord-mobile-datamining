// _runtime/metro/15617__.js
import _mod15610 from "15610__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15610(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
