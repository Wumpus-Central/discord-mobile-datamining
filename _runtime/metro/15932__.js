// === Module 15932: ? ===

// Module 15932
import _mod15925 from "module_15925" /* 15925 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15925(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};