// _runtime/metro/14138__.js
import _mod14131 from "14131__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14131(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
