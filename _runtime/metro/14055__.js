// _runtime/metro/14055__.js
import _mod14048 from "14048__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14048(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
