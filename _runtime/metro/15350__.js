// === Module 15350: ? ===

// Module 15350
import _mod15343 from "module_15343" /* 15343 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15343(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};