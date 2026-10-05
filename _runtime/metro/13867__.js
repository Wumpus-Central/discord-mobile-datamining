// _runtime/metro/13867__.js
import _mod13860 from "13860__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod13860(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
