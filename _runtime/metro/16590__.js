// === Module 16590: ? ===

// Module 16590
import _mod16583 from "module_16583" /* 16583 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16583(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};