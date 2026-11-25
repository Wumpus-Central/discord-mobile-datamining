// === Module 15489: ? ===

// Module 15489
import _mod15482 from "module_15482" /* 15482 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15482(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};