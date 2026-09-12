// === Module 14138: ? ===

// Module 14138
import _mod14131 from "module_14131" /* 14131 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14131(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};