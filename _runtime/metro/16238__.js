// === Module 16238: ? ===

// Module 16238
import _mod16231 from "module_16231" /* 16231 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod16231(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};