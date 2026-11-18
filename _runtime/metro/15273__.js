// _runtime/metro/15273__.js
import _mod15266 from "15266__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15266(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
