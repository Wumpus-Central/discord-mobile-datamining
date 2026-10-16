// === Module 15060: ? ===

// Module 15060
import _mod15053 from "module_15053" /* 15053 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15053(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};