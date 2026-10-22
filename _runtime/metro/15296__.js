// _runtime/metro/15296__.js
import _mod15289 from "15289__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15289(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
