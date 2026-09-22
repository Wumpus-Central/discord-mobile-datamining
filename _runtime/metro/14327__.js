// _runtime/metro/14327__.js
import _mod14320 from "14320__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14320(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
