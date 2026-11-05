// === Module 16194: ? ===

// Module 16194
import _mod16187 from "module_16187" /* 16187 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16187(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};