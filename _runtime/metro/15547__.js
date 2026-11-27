// _runtime/metro/15547__.js
import _mod15540 from "15540__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15540(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
