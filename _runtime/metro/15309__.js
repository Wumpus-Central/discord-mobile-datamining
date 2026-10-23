// === Module 15309: ? ===

// Module 15309
import _mod15302 from "module_15302" /* 15302 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15302(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};