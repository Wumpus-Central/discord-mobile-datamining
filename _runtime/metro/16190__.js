// _runtime/metro/16190__.js
import _mod16183 from "16183__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16183(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
