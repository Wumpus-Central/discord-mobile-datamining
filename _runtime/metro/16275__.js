// _runtime/metro/16275__.js
import _mod16268 from "16268__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16268(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
