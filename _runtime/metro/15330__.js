// === Module 15330: ? ===

// Module 15330
import _mod15323 from "module_15323" /* 15323 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15323(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};