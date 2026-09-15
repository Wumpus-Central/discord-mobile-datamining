// _runtime/metro/14144__.js
import _mod14137 from "14137__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14137(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
