// _runtime/metro/13865__.js
import _mod13858 from "13858__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod13858(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
