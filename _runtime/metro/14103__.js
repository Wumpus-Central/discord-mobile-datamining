// === Module 14103: ? ===

// Module 14103
import _mod14096 from "module_14096" /* 14096 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14096(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};