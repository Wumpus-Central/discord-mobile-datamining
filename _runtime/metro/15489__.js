// _runtime/metro/15489__.js
import _mod15482 from "15482__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15482(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
