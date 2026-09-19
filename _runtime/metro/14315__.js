// _runtime/metro/14315__.js
import _mod14308 from "14308__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14308(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
