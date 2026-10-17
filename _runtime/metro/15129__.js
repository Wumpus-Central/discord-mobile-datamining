// _runtime/metro/15129__.js
import _mod15122 from "15122__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15122(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
