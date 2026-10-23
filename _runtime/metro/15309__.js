// _runtime/metro/15309__.js
import _mod15302 from "15302__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15302(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
