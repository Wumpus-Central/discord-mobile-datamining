// === Module 14188: ? ===

// Module 14188
import _mod14181 from "module_14181" /* 14181 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14181(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};