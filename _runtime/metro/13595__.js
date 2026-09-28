// === Module 13595: ? ===

// Module 13595
import _mod13588 from "module_13588" /* 13588 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod13588(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};