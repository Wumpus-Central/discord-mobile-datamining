// === Module 14321: ? ===

// Module 14321
import _mod14314 from "module_14314" /* 14314 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14314(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};