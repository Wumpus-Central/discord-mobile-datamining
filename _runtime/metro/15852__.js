// _runtime/metro/15852__.js
import _mod15845 from "15845__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15845(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
