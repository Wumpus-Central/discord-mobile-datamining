// _runtime/metro/15540__.js
import _mod15533 from "15533__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15533(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
