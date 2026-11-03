// _runtime/metro/16079__.js
import _mod16072 from "16072__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16072(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
