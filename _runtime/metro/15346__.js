// === Module 15346: ? ===

// Module 15346
import _mod15339 from "module_15339" /* 15339 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod15339(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};