// === Module 15391: ? ===

// Module 15391
import _mod15384 from "module_15384" /* 15384 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15384(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};