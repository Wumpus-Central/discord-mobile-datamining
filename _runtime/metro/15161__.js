// _runtime/metro/15161__.js
import _mod15154 from "15154__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15154(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
