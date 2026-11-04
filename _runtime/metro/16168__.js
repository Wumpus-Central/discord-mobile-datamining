// _runtime/metro/16168__.js
import _mod16161 from "16161__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16161(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
