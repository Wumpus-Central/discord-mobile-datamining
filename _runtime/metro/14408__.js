// _runtime/metro/14408__.js
import _mod14401 from "14401__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14401(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
