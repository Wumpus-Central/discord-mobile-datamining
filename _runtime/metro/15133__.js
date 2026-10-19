// _runtime/metro/15133__.js
import _mod15126 from "15126__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15126(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
