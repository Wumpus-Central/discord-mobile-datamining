// === Module 13578: ? ===

// Module 13578
import _mod13571 from "module_13571" /* 13571 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod13571(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};