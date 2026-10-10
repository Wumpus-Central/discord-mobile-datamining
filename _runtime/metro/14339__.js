// _runtime/metro/14339__.js
import _mod14332 from "14332__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14332(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
