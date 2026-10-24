// _runtime/metro/15350__.js
import _mod15343 from "15343__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15343(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
