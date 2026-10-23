// _runtime/metro/15330__.js
import _mod15323 from "15323__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15323(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
