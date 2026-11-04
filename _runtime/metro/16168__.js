// === Module 16168: ? ===

// Module 16168
import _mod16161 from "module_16161" /* 16161 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16161(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};