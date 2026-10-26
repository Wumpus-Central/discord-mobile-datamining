// === Module 15354: ? ===

// Module 15354
import _mod15347 from "module_15347" /* 15347 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15347(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};