// === Module 15367: ? ===

// Module 15367
import _mod15360 from "module_15360" /* 15360 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15360(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};