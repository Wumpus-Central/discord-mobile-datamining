// === Module 14127: ? ===

// Module 14127
import _mod14120 from "module_14120" /* 14120 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14120(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};