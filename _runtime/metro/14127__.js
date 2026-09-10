// _runtime/metro/14127__.js
import _mod14120 from "14120__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14120(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
