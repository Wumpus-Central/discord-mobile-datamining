// _runtime/metro/14052__.js
import _mod14045 from "14045__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14045(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
