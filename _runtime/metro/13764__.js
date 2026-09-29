// _runtime/metro/13764__.js
import _mod13757 from "13757__.js";

export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod13757(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
