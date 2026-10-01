// _runtime/metro/13799__.js
import _mod13792 from "13792__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod13792(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
