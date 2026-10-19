// === Module 15161: ? ===

// Module 15161
import _mod15154 from "module_15154" /* 15154 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15154(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};