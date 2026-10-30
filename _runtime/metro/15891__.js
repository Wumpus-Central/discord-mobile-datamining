// === Module 15891: ? ===

// Module 15891
import _mod15884 from "module_15884" /* 15884 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15884(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};