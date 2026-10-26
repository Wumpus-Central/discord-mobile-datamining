// _runtime/metro/15354__.js
import _mod15347 from "15347__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15347(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
