// _runtime/metro/13885__.js
import _mod13878 from "13878__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod13878(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
