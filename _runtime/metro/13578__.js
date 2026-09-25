// _runtime/metro/13578__.js
import _mod13571 from "13571__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod13571(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
