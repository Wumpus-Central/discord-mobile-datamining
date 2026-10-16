// _runtime/metro/15060__.js
import _mod15053 from "15053__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15053(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
