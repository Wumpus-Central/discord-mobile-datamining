// === Module 14165: ? ===

// Module 14165
import _mod14158 from "module_14158" /* 14158 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14158(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};