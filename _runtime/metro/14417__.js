// _runtime/metro/14417__.js
import _mod14410 from "14410__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14410(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
