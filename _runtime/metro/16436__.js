// _runtime/metro/16436__.js
import _mod16429 from "16429__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16429(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
