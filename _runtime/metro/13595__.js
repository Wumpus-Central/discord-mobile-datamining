// _runtime/metro/13595__.js
import _mod13588 from "13588__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod13588(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
