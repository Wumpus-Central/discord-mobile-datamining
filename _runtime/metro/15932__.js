// _runtime/metro/15932__.js
import _mod15925 from "15925__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15925(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
