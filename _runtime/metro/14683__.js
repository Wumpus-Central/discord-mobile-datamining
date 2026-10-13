// === Module 14683: ? ===

// Module 14683
import _mod14676 from "module_14676" /* 14676 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14676(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};