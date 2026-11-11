// === Module 16436: ? ===

// Module 16436
import _mod16429 from "module_16429" /* 16429 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16429(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};