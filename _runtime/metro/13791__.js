// === Module 13791: ? ===

// Module 13791
import _mod13784 from "module_13784" /* 13784 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod13784(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};