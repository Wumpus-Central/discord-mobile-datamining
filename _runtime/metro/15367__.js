// _runtime/metro/15367__.js
import _mod15360 from "15360__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15360(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
