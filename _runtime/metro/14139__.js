// _runtime/metro/14139__.js
import _mod14132 from "14132__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14132(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
