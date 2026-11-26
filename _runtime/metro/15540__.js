// === Module 15540: ? ===

// Module 15540
import _mod15533 from "module_15533" /* 15533 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15533(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};