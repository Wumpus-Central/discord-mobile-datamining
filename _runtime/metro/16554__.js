// === Module 16554: ? ===

// Module 16554
import _mod16547 from "module_16547" /* 16547 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16547(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};