// === Module 15259: ? ===

// Module 15259
import _mod15252 from "module_15252" /* 15252 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15252(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};