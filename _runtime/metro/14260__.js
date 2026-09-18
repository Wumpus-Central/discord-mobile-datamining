// _runtime/metro/14260__.js
import _mod14253 from "14253__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14253(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
