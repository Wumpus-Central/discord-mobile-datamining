// === Module 13867: ? ===

// Module 13867
import _mod13860 from "module_13860" /* 13860 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod13860(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};