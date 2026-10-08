// _runtime/metro/14188__.js
import _mod14181 from "14181__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14181(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
