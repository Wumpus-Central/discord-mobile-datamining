// _runtime/metro/16248__.js
import _mod16241 from "16241__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16241(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
