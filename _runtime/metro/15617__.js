// === Module 15617: ? ===

// Module 15617
import _mod15610 from "module_15610" /* 15610 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15610(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};