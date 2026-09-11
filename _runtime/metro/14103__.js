// _runtime/metro/14103__.js
import _mod14096 from "14096__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14096(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
