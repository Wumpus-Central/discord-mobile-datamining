// _runtime/metro/16590__.js
import _mod16583 from "16583__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16583(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
