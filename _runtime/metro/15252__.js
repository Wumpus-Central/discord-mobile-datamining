// _runtime/metro/15252__.js
import _mod15245 from "15245__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15245(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
