// === Module 14362: ? ===

// Module 14362
import _mod14355 from "module_14355" /* 14355 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14355(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};