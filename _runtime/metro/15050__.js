// === Module 15050: ? ===

// Module 15050
import _mod15043 from "module_15043" /* 15043 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15043(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};