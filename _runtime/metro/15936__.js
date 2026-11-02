// === Module 15936: ? ===

// Module 15936
import _mod15929 from "module_15929" /* 15929 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15929(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};