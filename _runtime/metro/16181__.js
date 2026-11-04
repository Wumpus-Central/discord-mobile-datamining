// _runtime/metro/16181__.js
import _mod16174 from "16174__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16174(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
