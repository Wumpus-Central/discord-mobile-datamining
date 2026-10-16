// _runtime/metro/15050__.js
import _mod15043 from "15043__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15043(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
