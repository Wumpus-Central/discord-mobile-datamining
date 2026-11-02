// _runtime/metro/15936__.js
import _mod15929 from "15929__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15929(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
