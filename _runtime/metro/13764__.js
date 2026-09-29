// === Module 13764: ? ===

// Module 13764
import _mod13757 from "module_13757" /* 13757 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod13757(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};