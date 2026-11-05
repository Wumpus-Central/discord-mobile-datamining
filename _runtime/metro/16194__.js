// _runtime/metro/16194__.js
import _mod16187 from "16187__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16187(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
