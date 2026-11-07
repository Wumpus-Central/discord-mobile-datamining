// _runtime/metro/16238__.js
import _mod16231 from "16231__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16231(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
