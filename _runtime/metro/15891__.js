// _runtime/metro/15891__.js
import _mod15884 from "15884__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15884(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
