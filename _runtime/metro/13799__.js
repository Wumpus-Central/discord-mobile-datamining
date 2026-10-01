// === Module 13799: ? ===

// Module 13799
import _mod13792 from "module_13792" /* 13792 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod13792(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};