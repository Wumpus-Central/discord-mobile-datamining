// === Module 13885: ? ===

// Module 13885
import _mod13878 from "module_13878" /* 13878 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod13878(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};