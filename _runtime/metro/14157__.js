// === Module 14157: ? ===

// Module 14157
import _mod14150 from "module_14150" /* 14150 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14150(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};