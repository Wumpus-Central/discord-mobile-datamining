// _runtime/metro/13791__.js
import _mod13784 from "13784__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod13784(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
