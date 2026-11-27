// === Module 15547: ? ===

// Module 15547
import _mod15540 from "module_15540" /* 15540 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15540(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};