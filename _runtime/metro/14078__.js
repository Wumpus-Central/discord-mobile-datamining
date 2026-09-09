// _runtime/metro/14078__.js
import _mod14071 from "14071__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14071(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
