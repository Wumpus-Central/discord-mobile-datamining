// === Module 16181: ? ===

// Module 16181
import _mod16174 from "module_16174" /* 16174 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16174(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};