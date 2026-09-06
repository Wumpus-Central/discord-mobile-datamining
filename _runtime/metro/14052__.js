// === Module 14052: ? ===

// Module 14052
import _mod14045 from "module_14045" /* 14045 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14045(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};