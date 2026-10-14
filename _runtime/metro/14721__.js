// === Module 14721: ? ===

// Module 14721
import _mod14714 from "module_14714" /* 14714 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14714(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};