// === Module 13596: ? ===

// Module 13596
import _mod13589 from "module_13589" /* 13589 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod13589(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};