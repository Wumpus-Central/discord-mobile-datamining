// _runtime/metro/14165__.js
import _mod14158 from "14158__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14158(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
