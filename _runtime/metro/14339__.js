// === Module 14339: ? ===

// Module 14339
import _mod14332 from "module_14332" /* 14332 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14332(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};