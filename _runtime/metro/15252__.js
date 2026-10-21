// === Module 15252: ? ===

// Module 15252
import _mod15245 from "module_15245" /* 15245 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15245(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};