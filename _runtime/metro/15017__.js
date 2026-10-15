// === Module 15017: ? ===

// Module 15017
import _mod15010 from "module_15010" /* 15010 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15010(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};