// _runtime/metro/15017__.js
import _mod15010 from "15010__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15010(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
