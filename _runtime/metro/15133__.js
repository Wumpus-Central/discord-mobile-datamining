// === Module 15133: ? ===

// Module 15133
import _mod15126 from "module_15126" /* 15126 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15126(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};