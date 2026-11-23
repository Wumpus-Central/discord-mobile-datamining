// _runtime/metro/15346__.js
import _mod15339 from "15339__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15339(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
