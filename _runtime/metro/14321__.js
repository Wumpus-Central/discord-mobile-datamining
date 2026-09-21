// _runtime/metro/14321__.js
import _mod14314 from "14314__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14314(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
