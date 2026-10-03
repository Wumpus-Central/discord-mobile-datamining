// === Module 13865: ? ===

// Module 13865
import _mod13858 from "module_13858" /* 13858 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod13858(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};