// _runtime/metro/15259__.js
import _mod15252 from "15252__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15252(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
