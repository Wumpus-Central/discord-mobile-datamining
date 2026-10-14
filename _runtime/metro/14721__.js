// _runtime/metro/14721__.js
import _mod14714 from "14714__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14714(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
