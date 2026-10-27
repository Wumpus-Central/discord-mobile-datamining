// _runtime/metro/15391__.js
import _mod15384 from "15384__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15384(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
