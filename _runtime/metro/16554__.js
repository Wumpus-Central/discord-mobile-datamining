// _runtime/metro/16554__.js
import _mod16547 from "16547__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16547(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
